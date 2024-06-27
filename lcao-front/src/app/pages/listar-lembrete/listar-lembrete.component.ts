import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs/operators';
import { LembreteService } from 'src/app/core/services/lembrete.service';
import { Lembrete } from 'src/app/core/types/lembrete';

const DELAY = 300;

@Component({
  selector: 'app-listar-lembrete',
  templateUrl: './listar-lembrete.component.html',
  styleUrls: ['./listar-lembrete.component.scss']
})
export class ListarLembreteComponent implements OnDestroy, OnInit {
  listaLembretes: Lembrete[] = [];
  paginaAtual = 0;
  haMaisLembretes = true;
  subscription: Subscription;
  campoBusca: FormControl = new FormControl('');

  constructor(private service: LembreteService) {
    this.subscription = this.campoBusca.valueChanges.pipe(
      startWith(''),
      debounceTime(DELAY),
      distinctUntilChanged(),
      switchMap((filtro: string) => {
        this.paginaAtual = 0;
        this.haMaisLembretes = true;
        return this.service.listar(this.paginaAtual, filtro);
      })
    ).subscribe({
      next: (lembretes) => {
        this.listaLembretes = lembretes;
      },
      error: () => {
        alert("Erro ao listar Lembretes!");
      }
    });
  }

  ngOnInit(): void {
    this.requestNotificationPermission();
  }

  carregarMaisLembretes(): void {
    this.service.listar(++this.paginaAtual, this.campoBusca.value).subscribe({
      next: (lembretes) => {
        this.listaLembretes.push(...lembretes);
        if (!lembretes.length) {
          this.haMaisLembretes = false;
        }
      },
      error: () => {
        alert("Erro ao carregar mais Lembretes!");
      }
    });
  }

  private requestNotificationPermission() {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission !== 'granted') {
          console.log('Permissão de notificação negada');
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
