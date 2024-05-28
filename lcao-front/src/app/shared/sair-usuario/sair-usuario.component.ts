import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-sair-usuario',
  templateUrl: './sair-usuario.component.html',
  styleUrls: ['./sair-usuario.component.scss']
})
export class SairUsuarioComponent {
  @Input() isVisible: boolean = false;
  @Output() visibilityChange = new EventEmitter<boolean>();

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  sairConta() {
    this.usuarioService.logout();
    this.router.navigate(['./login']);
    this.closeModal();
  }

  closeModal() {
    this.isVisible = false;
    this.visibilityChange.emit(this.isVisible);
  }
}
