import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Callback } from '../interface/lembrete';
import { Usuario } from '../interface/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly API = 'http://localhost:8080/usuario';

  constructor(private http: HttpClient) { }

  cadastrar (usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.API, usuario);
  }

  logar (usuario: Usuario): Observable<boolean> {
    return this.http.post<boolean>(`${this.API}/logar`, usuario)
  }
}
