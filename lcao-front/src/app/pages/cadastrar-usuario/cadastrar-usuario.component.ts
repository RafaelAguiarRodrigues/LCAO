import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';
import { Usuario } from 'src/app/core/types/usuario';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})
export class CadastrarUsuarioComponent implements OnInit {
  formulario!: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private service: AutenticacaoService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(4)]],
      email: [null, [Validators.required, Validators.minLength(6), Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(5)]]
    })
  }

  criarUsuario() {
    if (this.formulario.valid) {
      const novoUsuario = this.formulario.getRawValue() as Usuario;

      console.log(novoUsuario);

      this.service.cadastrar(novoUsuario).subscribe({
        next: () => {
          alert('Usuário criado!');
          this.router.navigate((['./login']));
        },
        error: () => {
          alert('Erro ao criar usuário')
        }
      })
    }
  }

  cancelar() {
    this.router.navigate((['./login']));
  }
}
