import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {
  formulario!: FormGroup;
  constructor(private router: Router,private formBuilder: FormBuilder, private service: UsuarioService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [''],
      email: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    })
  }

  loginUsuario() {
    if(this.formulario.valid){
      this.service.logar(this.formulario.value).subscribe({
        next: (resp: boolean) => {
          if(resp){
            this.router.navigate((['./listarLembrete']));
            sessionStorage.setItem('autorizacao', resp.toString());
            alert(`Bem-vindo!`);
          }else alert("Usuario/senha inválidos!")

        },
        error: () => {
          alert('Erro ao Logar!');
        }
      })
    }
  }

  cancelar() {
    this.router.navigate((['./listarLembrete']));
  }

  habilitarBotao(){
    if(this.formulario.valid){
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }
}
