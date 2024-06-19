import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnotacaoService } from 'src/app/core/services/anotacao.service';
import { Anotacao } from 'src/app/core/types/anotacao';

@Component({
  selector: 'app-editar-anotacao',
  templateUrl: './editar-anotacao.component.html',
  styleUrls: ['./editar-anotacao.component.scss']
})
export class EditarAnotacaoComponent {
  anotacao!: Anotacao;
  formulario!: FormGroup;

  constructor(
    private service: AnotacaoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: [''],
      titulo: [''],
      conteudo: [''],
      modelo: ['modelo1']
    });

    const idParam = this.route.snapshot.paramMap.get('id') as string;

    this.service.buscarPorId(idParam).subscribe((anotacao) => {
      this.anotacao = anotacao;
      this.formulario.patchValue({
        id: anotacao.id,
        titulo: anotacao.titulo,
        conteudo: anotacao.conteudo,
        modelo: anotacao.modelo,
        usuario_id: anotacao.usuario_id
      })
    });
  }

  editarLembrete() {
    if (this.formulario.valid) {
      const anotacaoAtualizada: Anotacao = {
        id: this.anotacao.id,
        titulo: this.formulario.controls['titulo']?.value,
        conteudo: this.formulario.controls['conteudo']?.value,
        modelo: this.formulario.controls['modelo']?.value,
        usuario_id: ''
      }

      this.service.editar(this.anotacao.id, anotacaoAtualizada).subscribe({
        next: () => {
          this.router.navigate(['/listarAnotacoes']);
        }
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarAnotacoes']);
  }
}
