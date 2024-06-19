import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Usuario } from '../types/usuario';
import { UsuarioService } from './usuario.service';
import { environment } from 'src/environments/environment.development';

interface AuthResponse {
  access_token: string,
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private readonly API = environment.API;

  constructor(
    private http: HttpClient,
    private usuarioService: UsuarioService
  ) { }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API}/auth/register`, usuario);
  }

  editar(id: string, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.API}/auth/${id}`, usuario);
  }

  autenticar(usuario: Usuario): Observable<HttpResponse<AuthResponse>> {
    return this.http.post<AuthResponse>(`${this.API}/auth/login`, usuario, { observe: 'response' })
      .pipe(
        tap(
          (response) => {
            const authToken = response.body?.access_token || '';
            this.usuarioService.salvarToken(authToken);
          }
        )
      );
  }

  buscarUsuarioLogado(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API}/auth/me`);
  }
}
