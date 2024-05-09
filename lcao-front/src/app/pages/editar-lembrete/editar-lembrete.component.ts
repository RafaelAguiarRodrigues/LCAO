import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Lembrete } from "src/app/core/types/lembrete";
import { LembreteService } from "src/app/core/services/lembrete.service";
import { dataLembreteValidator } from "src/app/shared/validators/data-lembrete-validator";

@Component({
  selector: 'app-editar-lembrete',
  templateUrl: './editar-lembrete.component.html',
  styleUrls: ['./editar-lembrete.component.css']
})
export class EditarLembreteComponent implements OnInit {
  lembrete: Lembrete = {
    id: '',
    titulo: '',
    descricao: '',
    prioridade: '',
    data: new Date(),
    modelo: '',
    usuario_id: ''
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
      id: [''],
      titulo: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      descricao: [''],
      data: ['', Validators.compose([Validators.required, dataLembreteValidator])],
      prioridade: ['baixa'],
      modelo: ['modelo1']
    });

    const idParam = this.route.snapshot.paramMap.get('id') as string;

    this.service.buscarPorId(idParam).subscribe((lembrete) => {
      this.formulario.patchValue({
        id: lembrete.id,
        titulo: lembrete.titulo,
        descricao: lembrete.descricao,
        data: lembrete.data,
        prioridade: lembrete.prioridade,
        modelo: lembrete.modelo,
        usuario_id: lembrete.usuario_id
      })
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
        usuario_id: ''
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
