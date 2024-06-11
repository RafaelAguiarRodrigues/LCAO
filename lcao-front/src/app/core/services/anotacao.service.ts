import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anotacao } from '../types/anotacao';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AnotacaoService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  listar(paginaAtual: number, filtro: string) {
    const itensPorPagina = 8;
    let params = new HttpParams().set('pagina', paginaAtual).set('limit', itensPorPagina);

    if (filtro.trim().length > 2) {
      params = params.set('filtro', filtro);
    }

    return this.http.get<Anotacao[]>(`${this.API}/anotacao`, { params });
  }
}
