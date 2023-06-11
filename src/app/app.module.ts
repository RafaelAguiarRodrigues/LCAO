import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { LembreteComponent } from './componentes/lembretes/lembrete/lembrete.component';
import { ListarLembreteComponent } from './componentes/lembretes/listar-lembrete/listar-lembrete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriarLembreteComponent } from './componentes/lembretes/criar-lembrete/criar-lembrete.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ExcluirLembreteComponent } from './componentes/lembretes/excluir-lembrete/excluir-lembrete.component';
import { EditarLembreteComponent } from './componentes/lembretes/editar-lembrete/editar-lembrete.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginUsuarioComponent } from './componentes/usuario/login-usuario/login-usuario.component';
import { CadastrarUsuarioComponent } from './componentes/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { SairUsuarioComponent } from './componentes/usuario/sair-usuario/sair-usuario.component';
import { BotaoCarregarMaisComponent } from './componentes/lembretes/listar-lembrete/botao-carregar-mais/botao-carregar-mais.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    LembreteComponent,
    ListarLembreteComponent,
    CriarLembreteComponent,
    ExcluirLembreteComponent,
    EditarLembreteComponent,
    LoginUsuarioComponent,
    CadastrarUsuarioComponent,
    SairUsuarioComponent,
    BotaoCarregarMaisComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
