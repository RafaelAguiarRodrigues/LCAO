import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacaoInterceptor } from './core/interceptors/autenticacao.interceptor';
import { CadastrarUsuarioComponent } from './pages/cadastrar-usuario/cadastrar-usuario.component';
import { CriarLembreteComponent } from './pages/listar-lembrete/criar-lembrete/criar-lembrete.component';
import { EditarLembreteComponent } from './pages/listar-lembrete/editar-lembrete/editar-lembrete.component';
import { ListarLembreteComponent } from './pages/listar-lembrete/listar-lembrete.component';
import { LoginUsuarioComponent } from './pages/login-usuario/login-usuario.component';
import { SharedModule } from './shared/shared.module';
import { ListarAnotacoesComponent } from './pages/listar-anotacoes/listar-anotacoes.component';
import { CriarAnotacaoComponent } from './pages/listar-anotacoes/criar-anotacao/criar-anotacao.component';
import { EditarAnotacaoComponent } from './pages/listar-anotacoes/editar-anotacao/editar-anotacao.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarLembreteComponent,
    CriarLembreteComponent,
    EditarLembreteComponent,
    CadastrarUsuarioComponent,
    LoginUsuarioComponent,
    ListarLembreteComponent,
    ListarAnotacoesComponent,
    CriarAnotacaoComponent,
    EditarAnotacaoComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
