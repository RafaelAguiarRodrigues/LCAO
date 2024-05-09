import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Callback, Lembrete } from '../types/lembrete';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {
  private readonly API = 'http://localhost:8080/lembrete';

  constructor(private http: HttpClient) { }

  listar(pagina: number, filtro: string): Observable<Callback> {
    const itensPorPagina = 8;
    let params = new HttpParams().set('pagina', pagina.toString()).set('limit', itensPorPagina.toString());

    if (filtro.trim().length > 2) {
      params = params.set('filtro', filtro);
    }

    return this.http.get<Callback>(`${this.API}`, { params });
  }

  criar(lembrete: Lembrete): Observable<Lembrete> {
    return this.http.post<Lembrete>(this.API, lembrete);
  }

  editar(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${this.API}/${lembrete.id}`;
    return this.http.put<Lembrete>(url, lembrete);
  }

  excluir(id: number): Observable<Lembrete> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Lembrete>(url);
  }

  buscarPorId(id: number): Observable<Lembrete> {
    const url = `${this.API}/${id}`;
    return this.http.get<Lembrete>(url);
  }
}
