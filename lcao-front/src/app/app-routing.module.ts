import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarUsuarioComponent } from './pages/cadastrar-usuario/cadastrar-usuario.component';
import { CriarLembreteComponent } from './pages/criar-lembrete/criar-lembrete.component';
import { EditarLembreteComponent } from './pages/editar-lembrete/editar-lembrete.component';
import { ExcluirLembreteComponent } from './pages/excluir-lembrete/excluir-lembrete.component';
import { ListarLembreteComponent } from './pages/listar-lembrete/listar-lembrete.component';
import { LoginUsuarioComponent } from './pages/login-usuario/login-usuario.component';
import { SairUsuarioComponent } from './pages/sair-usuario/sair-usuario.component';

const routes: Routes = [
  {
    path: 'listarLembrete',
    component: ListarLembreteComponent
  },
  {
    path: 'criarLembrete',
    component: CriarLembreteComponent
  },
  {
    path: 'lembretes/excluirLembrete/:id',
    component: ExcluirLembreteComponent
  },
  {
    path: 'lembretes/editarLembrete/:id',
    component: EditarLembreteComponent
  },
  {
    path: 'login',
    component: LoginUsuarioComponent
  },
  {
    path: 'cadastrarUsuario',
    component: CadastrarUsuarioComponent
  },
  {
    path: 'sair',
    component: SairUsuarioComponent
  },
  {
    path: '',
    redirectTo: 'listarLembrete',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
