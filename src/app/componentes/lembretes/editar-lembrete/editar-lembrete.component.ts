import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LembreteService } from '../../../service/lembrete.service';
import { ActivatedRoute, Router } from '@angular/router';
import { dataLembreteValidator } from 'src/app/validators/data-lembrete-validator';
import { Lembrete } from 'src/app/interface/lembrete';

@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent implements OnInit {
  lembrete: Lembrete = {
    id: 0,
    titulo: '',
    descricao: '',
    prioridade: '',
    data: new Date(),
    modelo: ''
  }
  formulario!: FormGroup;

  constructor(
    private service: LembreteService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: [0],
      titulo: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      descricao: [''],
      data: ['', Validators.compose([Validators.required, dataLembreteValidator])],
      prioridade: ['baixa'],
      modelo: ['modelo1']
    });

    const idParam = this.route.snapshot.paramMap.get('id') as string;
    const id = parseInt(idParam);

    this.service.buscarPorId(id).subscribe((lembrete) => {
      this.formulario.controls['id'].setValue(lembrete.id);
      this.formulario.controls['titulo'].setValue(lembrete.titulo);
      this.formulario.controls['descricao'].setValue(lembrete.descricao);
      this.formulario.controls['data'].setValue(lembrete.data);
      this.formulario.controls['prioridade'].setValue(lembrete.prioridade);
      this.formulario.controls['modelo'].setValue(lembrete.modelo);
    });
  }

  editarLembrete() {
    if (this.formulario.valid) {
      const lembrete: Lembrete = {
        id: this.formulario.controls['id']?.value,
        titulo: this.formulario.controls['titulo']?.value,
        descricao: this.formulario.controls['descricao']?.value,
        data: this.formulario.controls['data']?.value,
        prioridade: this.formulario.controls['prioridade']?.value,
        modelo: this.formulario.controls['modelo']?.value,
      }
    }
    if (this.formulario && this.formulario.valid) {
      this.service.editar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarLembrete']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarLembrete']);
  }

  habilitarBotao(): string {
    if (this.formulario && this.formulario.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
