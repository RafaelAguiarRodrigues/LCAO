import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anotacao } from '../types/anotacao';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnotacaoService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  listar(paginaAtual: number, filtro: string): Observable<Anotacao[]> {
    const itensPorPagina = 8;
    let params = new HttpParams().set('pagina', paginaAtual).set('limit', itensPorPagina);

    if (filtro.trim().length > 2) {
      params = params.set('filtro', filtro);
    }

    return this.http.get<Anotacao[]>(`${this.API}/anotacao`, { params });
  }

  criar(anotacao: Anotacao): Observable<Anotacao> {
    return this.http.post<Anotacao>(`${this.API}/anotacao`, anotacao);
  }

  buscarPorId(id: string) {
    return this.http.get<Anotacao>(`${this.API}/anotacao/${id}`);
  }

  editar(id: string, anotacao: Anotacao): Observable<Anotacao> {
    return this.http.put<Anotacao>(`${this.API}/anotacao/${id}`, anotacao);
  }

  excluir(id: string): Observable<Anotacao> {
    return this.http.delete<Anotacao>(`${this.API}/anotacao/${id}`);
  }
}
