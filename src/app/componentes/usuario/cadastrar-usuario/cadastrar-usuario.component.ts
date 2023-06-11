import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {
  formulario!: FormGroup;
  constructor(private router: Router,private formBuilder: FormBuilder, private service: UsuarioService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      email: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    })
  }

  criarUsuario() {
    if(this.formulario.valid){
      this.service.cadastrar(this.formulario.value).subscribe({
        next: () => {
          alert('Usuário criado!');
          sessionStorage.setItem('autorizacao', "true");
          this.router.navigate((['./listarLembrete']));
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
