import { Component, Input } from '@angular/core';
import { Anotacao } from 'src/app/core/types/anotacao';

@Component({
  selector: 'app-anotacao',
  templateUrl: './anotacao.component.html',
  styleUrls: ['./anotacao.component.scss']
})
export class AnotacaoComponent {
  @Input() anotacao!: Anotacao;
  @Input() isExcluirVisible = false;

  constructor() { }

  openModalExcluir() {
    this.isExcluirVisible = true;
  }

  handleVisibilityChange(isVisible: boolean) {
    this.isExcluirVisible = isVisible;
  }
}
