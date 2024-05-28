import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './shared/cabecalho/cabecalho.component';
import { RodapeComponent } from './shared/rodape/rodape.component';
import { LembreteComponent } from './shared/lembrete/lembrete.component';
import { ListarLembreteComponent } from './pages/listar-lembrete/listar-lembrete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { ExcluirLembreteComponent } from './pages/excluir-lembrete/excluir-lembrete.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SairUsuarioComponent } from './pages/sair-usuario/sair-usuario.component';
import { BotaoCarregarMaisComponent } from './shared/botao-carregar-mais/botao-carregar-mais.component';
import { CriarLembreteComponent } from './pages/criar-lembrete/criar-lembrete.component';
import { EditarLembreteComponent } from './pages/editar-lembrete/editar-lembrete.component';
import { CadastrarUsuarioComponent } from './pages/cadastrar-usuario/cadastrar-usuario.component';
import { LoginUsuarioComponent } from './pages/login-usuario/login-usuario.component';
import { AutenticacaoInterceptor } from './core/interceptors/autenticacao.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    LembreteComponent,
    ListarLembreteComponent,
    ExcluirLembreteComponent,
    SairUsuarioComponent,
    BotaoCarregarMaisComponent,
    CriarLembreteComponent,
    EditarLembreteComponent,
    CadastrarUsuarioComponent,
    LoginUsuarioComponent,
    ListarLembreteComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
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
