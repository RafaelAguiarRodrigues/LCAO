import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../types/usuario';
import { jwtDecode } from "jwt-decode";
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private userSubject = new BehaviorSubject<Usuario | null>(null);

  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuiToken()){
      this.decodificarJWT();
    }
  }

  private decodificarJWT(){
    const token = this.tokenService.retornarToken();
    const usuario = jwtDecode(token) as Usuario;
    this.userSubject.next(usuario);
  }

  salvarToken(token: string): void {
    this.tokenService.salvarToken(token);
    this.decodificarJWT();
  }

  retornarUsuario() {
    return this.userSubject.asObservable();
  }

  logout() {
    this.tokenService.excluirToken();
    this.userSubject.next(null);
  }

  estaLogado() {
    return this.tokenService.possuiToken();
  }
}
