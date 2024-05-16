import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';

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
      this.service.cadastrar(this.formulario.value).subscribe({
        next: () => {
          alert('Usuário criado!');
          this.router.navigate((['./login']));
        }
      })
    }
  }

  cancelar() {
    this.router.navigate((['./login']));
  }

  habilitarBotao() {
    if (this.formulario.valid) {
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }
}
