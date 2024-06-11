import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { CabecalhoComponent } from "./cabecalho/cabecalho.component";
import { ExcluirLembreteComponent } from "./excluir-lembrete/excluir-lembrete.component";
import { LembreteComponent } from "./lembrete/lembrete.component";
import { RodapeComponent } from "./rodape/rodape.component";
import { SairUsuarioComponent } from "./sair-usuario/sair-usuario.component";
import { RouterModule } from "@angular/router";
import { BotaoCarregarMaisComponent } from "./botao-carregar-mais/botao-carregar-mais.component";
import { MenuLateralComponent } from './cabecalho/menu-lateral/menu-lateral.component';
import { AnotacaoComponent } from './anotacao/anotacao.component';

@NgModule({
  declarations: [
    CabecalhoComponent,
    RodapeComponent,
    LembreteComponent,
    ExcluirLembreteComponent,
    SairUsuarioComponent,
    BotaoCarregarMaisComponent,
    MenuLateralComponent,
    AnotacaoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CabecalhoComponent,
    RodapeComponent,
    LembreteComponent,
    ExcluirLembreteComponent,
    SairUsuarioComponent,
    BotaoCarregarMaisComponent,
    AnotacaoComponent
  ]
})
export class SharedModule {}
