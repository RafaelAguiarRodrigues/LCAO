import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap, tap } from 'rxjs/operators';
import { LembreteService } from 'src/app/core/services/lembrete.service';
import { Lembrete } from 'src/app/core/types/lembrete';

const DELAY = 300;
@Component({
  selector: 'app-listar-lembrete',
  templateUrl: './listar-lembrete.component.html',
  styleUrls: ['./listar-lembrete.component.css']
})
export class ListarLembreteComponent implements OnInit, OnDestroy {
  listaLembretes: Lembrete[] = [];
  paginaAtual: number = 0;
  haMaisLembretes: boolean = true;
  filtro: string = '';
  subscription: Subscription;
  campoBusca: FormControl = new FormControl('');

  constructor(private service: LembreteService, private router: Router) {
    this.subscription = this.service.listar(this.paginaAtual, this.filtro).subscribe({
      next: (callback) =>
        this.listaLembretes = callback.content
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
          map(callback => callback.content),
          filter(lembretes => lembretes.length > 0)
        );
      } else {
        return this.service.listar(this.paginaAtual, this.filtro).pipe(
          map(callback => callback.content)
        );
      }
    })
  );


  ngOnInit(): void {
    const usuarioLogado = sessionStorage.getItem('autorizacao');
    if (usuarioLogado == null) {
      this.router.navigate(['./loginUsuario']);
      alert('Você precisa estar logado para acessar a página!');
    }
  }

  carregarMaisLembretes() {
    this.service.listar(++this.paginaAtual, this.filtro)
      .subscribe(callback => {
        const listaLembretes = callback.content;
        this.listaLembretes.push(...listaLembretes);
        if (!listaLembretes.length) {
          this.haMaisLembretes = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
