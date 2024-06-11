import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnotacaoService } from 'src/app/core/services/anotacao.service';
import { Anotacao } from 'src/app/core/types/anotacao';

@Component({
  selector: 'app-criar-anotacao',
  templateUrl: './criar-anotacao.component.html',
  styleUrls: ['./criar-anotacao.component.scss']
})
export class CriarAnotacaoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private service: AnotacaoService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      titulo: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      conteudo: [''],
      modelo: ['modelo1']
    });
  }

  criarLembrete() {
    if (this.formulario.valid) {
      const novoLembrete = this.formulario.getRawValue() as Anotacao;

      this.service.criar(novoLembrete).subscribe({
        next: () => {
          this.router.navigate(['./listarLembrete']);
        }
      });
    }
  }

  cancelar() {
    this.router.navigate((['./listarLembrete']));
  }
}
