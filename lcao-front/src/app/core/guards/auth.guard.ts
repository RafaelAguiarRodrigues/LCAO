import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

export const authGuard = () => {
  const usuarioService = inject(UsuarioService);
  const router = inject(Router);

  if (usuarioService.estaLogado()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
