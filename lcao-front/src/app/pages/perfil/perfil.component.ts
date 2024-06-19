import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/core/services/autenticacao.service';
import { UsuarioService } from 'src/app/core/services/usuario.service';
import { Usuario } from 'src/app/core/types/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  formulario!: FormGroup;
  usuario!: Usuario;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: AutenticacaoService,
  ) { }

  ngOnInit(): void {
    this.service.buscarUsuarioLogado().subscribe({
      next: (usuario) => {
        this.usuario = usuario;
        this.formulario.patchValue({
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email
        })
      }
    });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(4)]],
      email: [null, [Validators.required, Validators.minLength(6), Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(5)]]
    });
  }

  editarUsuario() {
    if (this.formulario.valid) {
      const usuarioAtualizado = {
        id: this.usuario.id,
        nome: this.formulario.value.nome,
        email: this.formulario.value.email,
        senha: this.formulario.value.senha,
      }
      this.service.editar(this.usuario.id, usuarioAtualizado).subscribe({
        next: () => {
          alert('Usuário atualizado!');
          this.router.navigate((['./listarLembrete']));
        }
      })
    }
  }

  cancelar() {
    this.router.navigate((['./login']));
  }
}
