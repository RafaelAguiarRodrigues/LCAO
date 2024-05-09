import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Usuario } from '../types/usuario';
import { UsuarioService } from './usuario.service';

interface AuthResponse {
  access_token: string,
  usuario: Usuario
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private readonly API = 'http://localhost:8080/usuario';

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.API, usuario);
  }

  autenticar(usuario: Usuario): Observable<HttpResponse<AuthResponse>> {
    return this.http.post<AuthResponse>(`${this.API}/logar`, usuario, { observe: 'response' })
      .pipe(
        tap(
          (response) => {
            const authToken = response.body?.access_token || '';
            this.usuarioService.salvarToken(authToken);
          }
        )
      );
  }
}
