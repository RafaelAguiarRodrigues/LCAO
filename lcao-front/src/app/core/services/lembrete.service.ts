import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lembrete } from '../types/lembrete';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  listar(pagina: number, filtro: string): Observable<Lembrete[]> {
    const itensPorPagina = 8;
    let params = new HttpParams().set('pagina', pagina).set('limit', itensPorPagina);

    if (filtro.trim().length > 2) {
      params = params.set('filtro', filtro);
    }

    return this.http.get<Lembrete[]>(`${this.API}/lembrete`, { params });
  }

  criar(lembrete: Lembrete): Observable<Lembrete> {
    return this.http.post<Lembrete>(`${this.API}/lembrete`, lembrete);
  }

  editar(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${this.API}/lembrete/${lembrete.id}`;
    return this.http.put<Lembrete>(url, lembrete);
  }

  excluir(id: string): Observable<Lembrete> {
    const url = `${this.API}/lembrete/${id}`;
    return this.http.delete<Lembrete>(url);
  }

  buscarPorId(id: string): Observable<Lembrete> {
    const url = `${this.API}/lembrete/${id}`;
    return this.http.get<Lembrete>(url);
  }
}
