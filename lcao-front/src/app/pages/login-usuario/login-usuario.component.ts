import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})
export class LoginUsuarioComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: AutenticacaoService
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null, [Validators.required, Validators.minLength(6), Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(5)]]
    });
  }

  loginUsuario() {
    if (this.formulario.valid) {
      this.service.autenticar(this.formulario.value).subscribe({
        next: (resp) => {
          if (resp) {
            this.router.navigate(['/listarLembrete']);
            alert(`Bem-vindo!`);
          } else {
            alert("Usuário/senha inválidos!");
          }
        },
        error: () => {
          alert('Erro ao Logar!');
        }
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarLembrete']);
  }
}
