import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarLembreteComponent } from './pages/listar-lembrete/listar-lembrete.component';
import { CriarLembreteComponent } from './pages/criar-lembrete/criar-lembrete.component';
import { ExcluirLembreteComponent } from './shared/excluir-lembrete/excluir-lembrete.component';
import { EditarLembreteComponent } from './pages/editar-lembrete/editar-lembrete.component';
import { LoginUsuarioComponent } from './pages/login-usuario/login-usuario.component';
import { CadastrarUsuarioComponent } from './pages/cadastrar-usuario/cadastrar-usuario.component';
import { SairUsuarioComponent } from './shared/sair-usuario/sair-usuario.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'listarLembrete',
  pathMatch: 'full'
},
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
  path: 'loginUsuario',
  component: LoginUsuarioComponent
},
{
  path: 'cadastrarUsuario',
  component: CadastrarUsuarioComponent
},
{
  path: 'sairUsuario',
  component: SairUsuarioComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
