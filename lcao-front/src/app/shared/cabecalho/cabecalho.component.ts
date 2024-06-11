import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent {
  isModalSairVisible: boolean = false;
  isMenuAtivo = false;

  constructor(private userService: UsuarioService) {}

  user$ = this.userService.retornarUsuario();

  openModalSair() {
    this.isModalSairVisible = true;
  }

  handleVisibilityChange(isVisible: boolean) {
    this.isModalSairVisible = isVisible;
  }

  toggle(menu: string) {
    if (menu === 'mainMenu') {
      this.isMenuAtivo = !this.isMenuAtivo;
    } else if (menu === 'userMenu') {
      this.isMenuAtivo = !this.isMenuAtivo;
    }
  }
}
