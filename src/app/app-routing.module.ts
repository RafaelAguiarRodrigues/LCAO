import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarLembreteComponent } from './componentes/lembretes/listar-lembrete/listar-lembrete.component';
import { CriarLembreteComponent } from './componentes/lembretes/criar-lembrete/criar-lembrete.component';
import { ExcluirLembreteComponent } from './componentes/lembretes/excluir-lembrete/excluir-lembrete.component';
import { EditarLembreteComponent } from './componentes/lembretes/editar-lembrete/editar-lembrete.component';
import { LoginUsuarioComponent } from './componentes/usuario/login-usuario/login-usuario.component';
import { CadastrarUsuarioComponent } from './componentes/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { SairUsuarioComponent } from './componentes/usuario/sair-usuario/sair-usuario.component';

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
