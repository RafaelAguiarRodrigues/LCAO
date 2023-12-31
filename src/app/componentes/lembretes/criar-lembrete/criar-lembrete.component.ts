import { Component, OnInit } from '@angular/core';
import { Lembrete } from '../../../interface/lembrete';
import { Router } from '@angular/router';
import { LembreteService } from '../../../service/lembrete.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dataLembreteValidator } from 'src/app/validators/data-lembrete-validator';

@Component({
  selector: 'app-criar-lembrete',
  templateUrl: './criar-lembrete.component.html',
  styleUrls: ['./criar-lembrete.component.css']
})
export class CriarLembreteComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private service: LembreteService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      titulo: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      descricao: [''],
      data: ['', Validators.compose([Validators.required, dataLembreteValidator])],
      prioridade: ['baixa'],
      modelo: ['modelo1']
    })
  }

  criarLembrete() {
    if (this.formulario.valid) {
      const lembrete: Lembrete = {
        titulo: this.formulario.value.titulo,
        descricao: this.formulario.value.descricao,
        data: this.formulario.value.data,
        prioridade: this.formulario.value.prioridade,
        modelo: this.formulario.value.modelo
      };

      this.service.criar(lembrete).subscribe({
        next: () => {
          this.router.navigate(['./listarLembrete']);
        }
      });
    }
  }

  cancelar() {
    this.router.navigate((['./listarLembrete']));
  }

  habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }
}
