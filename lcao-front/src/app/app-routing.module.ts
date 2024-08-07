import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarUsuarioComponent } from './pages/cadastrar-usuario/cadastrar-usuario.component';
import { CriarLembreteComponent } from './pages/listar-lembrete/criar-lembrete/criar-lembrete.component';
import { EditarLembreteComponent } from './pages/listar-lembrete/editar-lembrete/editar-lembrete.component';
import { ListarLembreteComponent } from './pages/listar-lembrete/listar-lembrete.component';
import { LoginUsuarioComponent } from './pages/login-usuario/login-usuario.component';
import { ListarAnotacoesComponent } from './pages/listar-anotacoes/listar-anotacoes.component';
import { authGuard } from './core/guards/auth.guard';
import { CriarAnotacaoComponent } from './pages/listar-anotacoes/criar-anotacao/criar-anotacao.component';
import { EditarAnotacaoComponent } from './pages/listar-anotacoes/editar-anotacao/editar-anotacao.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  {
    path: 'listarLembrete',
    component: ListarLembreteComponent,
    canActivate: [authGuard]
  },
  {
    path: 'criarLembrete',
    component: CriarLembreteComponent,
    canActivate: [authGuard]
  },
  {
    path: 'lembretes/editarLembrete/:id',
    component: EditarLembreteComponent,
    canActivate: [authGuard]
  },
  {
    path: 'listarAnotacoes',
    component: ListarAnotacoesComponent,
    canActivate: [authGuard]
  },
  {
    path: 'anotacao/criar',
    component: CriarAnotacaoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'anotacao/editar/:id',
    component: EditarAnotacaoComponent,
    canActivate: [authGuard]
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
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [authGuard]
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
