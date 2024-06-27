import { Component, OnDestroy } from '@angular/core';
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
export class ListarAnotacoesComponent implements OnDestroy {
  listaAnotacoes: Anotacao[] = [];
  paginaAtual = 0;
  haMaisAnotacoes = true;
  subscription: Subscription;
  campoBusca: FormControl = new FormControl('');

  constructor(private service: AnotacaoService) {
    this.subscription = this.campoBusca.valueChanges.pipe(
      startWith(''),
      debounceTime(DELAY),
      distinctUntilChanged(),
      switchMap((filtro: string) => {
        this.paginaAtual = 0;
        this.haMaisAnotacoes = true;
        return this.service.listar(this.paginaAtual, filtro);
      })
    ).subscribe({
      next: (anotacoes) => {
        this.listaAnotacoes = anotacoes;
      },
      error: () => {
        alert("Erro ao listar Anotações!");
      }
    });
  }

  carregarMaisAnotacoes(): void {
    this.service.listar(++this.paginaAtual, this.campoBusca.value).subscribe({
      next: (anotacoes) => {
        this.listaAnotacoes.push(...anotacoes);
        if (!anotacoes.length) {
          this.haMaisAnotacoes = false;
        }
      },
      error: () => {
        alert("Erro ao carregar mais Anotações!");
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
