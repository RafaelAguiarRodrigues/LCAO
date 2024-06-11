import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, debounceTime, distinctUntilChanged, filter, map, startWith, switchMap } from 'rxjs';
import { AnotacaoService } from 'src/app/core/services/anotacao.service';
import { Anotacao } from 'src/app/core/types/anotacao';

const DELAY = 300;
@Component({
  selector: 'app-listar-anotacoes',
  templateUrl: './listar-anotacoes.component.html',
  styleUrls: ['./listar-anotacoes.component.scss']
})
export class ListarAnotacoesComponent {
  listaAnotacoes: Anotacao[] = [];
  paginaAtual = 0;
  haMaisLembretes = true;
  filtro = '';
  subscription: Subscription;
  campoBusca: FormControl = new FormControl('');

  constructor(private service: AnotacaoService, private router: Router) {
    this.subscription = this.service.listar(this.paginaAtual, this.filtro).subscribe({
      next: (callback) => {
        this.listaAnotacoes.push(...callback);
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
          this.listaAnotacoes.push(...LembretesProxPage);
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
