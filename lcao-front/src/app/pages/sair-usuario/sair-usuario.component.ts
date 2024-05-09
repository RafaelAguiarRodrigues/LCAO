import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-sair-usuario',
  templateUrl: './sair-usuario.component.html',
  styleUrls: ['./sair-usuario.component.css']
})
export class SairUsuarioComponent {

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  sairConta() {
    this.usuarioService.logout();
    this.router.navigate((['./login']));
  }

  cancelar() {
    this.router.navigate((['./listarLembrete']));
  }
}
