import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sair-usuario',
  templateUrl: './sair-usuario.component.html',
  styleUrls: ['./sair-usuario.component.css']
})
export class SairUsuarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sairConta() {
    this.router.navigate((['./loginUsuario']));
    sessionStorage.removeItem("autorizacao")
  }

  cancelar() {
    this.router.navigate((['./listarLembrete']));
  }
}
