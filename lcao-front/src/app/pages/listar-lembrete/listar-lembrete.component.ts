import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap } from 'rxjs/operators';
import { LembreteService } from 'src/app/core/services/lembrete.service';
import { Lembrete } from 'src/app/core/types/lembrete';

const DELAY = 300;
@Component({
  selector: 'app-listar-lembrete',
  templateUrl: './listar-lembrete.component.html',
  styleUrls: ['./listar-lembrete.component.scss']
})
export class ListarLembreteComponent implements OnInit, OnDestroy {
  listaLembretes: Lembrete[] = [];
  paginaAtual = 0;
  haMaisLembretes = true;
  filtro = '';
  subscription: Subscription;
  campoBusca: FormControl = new FormControl('');

  constructor(private service: LembreteService, private router: Router) {
    this.subscription = this.service.listar(this.paginaAtual, this.filtro).subscribe({
      next: (callback) => {
        this.listaLembretes.push(...callback);
      },
      error: () => {
        alert("Erro ao listar Lembretes!");
      }
    });
  }

  public lembretesEncontrados$ = this.campoBusca.valueChanges.pipe(
    startWith(''),
    debounceTime(DELAY),
    distinctUntilChanged(),
    switchMap((filtro: string) => {
      this.paginaAtual = 0;
      this.haMaisLembretes = true;
      this.filtro = filtro;
      if (filtro) {
        return this.service.listar(this.paginaAtual, this.filtro).pipe(
          map(callback => callback),
          filter(lembretes => lembretes.length > 0)
        );
      } else {
        return this.service.listar(this.paginaAtual, this.filtro).pipe(
          map(callback => callback)
        );
      }
    })
  );


  ngOnInit(): void {
    const usuarioLogado = localStorage.getItem('token');
    if (usuarioLogado == null) {
      this.router.navigate(['/login']);
      alert('Você precisa estar logado para acessar a página!');
    }
  }

  carregarMaisLembretes(): void {
    this.service.listar(++this.paginaAtual, this.filtro).subscribe({
        next: (callback) => {
          const LembretesProxPage = callback;
          this.listaLembretes.push(...LembretesProxPage);
          if (!LembretesProxPage.length) {
            this.haMaisLembretes = false;
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
