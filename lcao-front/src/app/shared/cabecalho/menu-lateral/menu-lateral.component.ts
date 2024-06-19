import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent {
  panelOpenState = false;
  @Input() isMenuAtivo = false;

  trocarMenu(){
    this.isMenuAtivo = !this.isMenuAtivo
  }
}
