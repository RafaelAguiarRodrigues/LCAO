import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnotacaoService } from 'src/app/core/services/anotacao.service';

@Component({
  selector: 'app-excluir-anotacao',
  templateUrl: './excluir-anotacao.component.html',
  styleUrls: ['./excluir-anotacao.component.scss']
})
export class ExcluirAnotacaoComponent {
  @Input() isVisible = false;
  @Input() id = '';
  @Output() visibilityChange = new EventEmitter<boolean>();

  constructor(
    private service: AnotacaoService,
  ) { }

  ngOnInit(): void {
    this.id = this.id;
  }

  excluirLembrete() {
    if (this.id && this.id != null) {
      this.service.excluir(this.id).subscribe({
        next: () => {
          window.location.reload();
        }
      })
    }
  }

  closeModal() {
    this.isVisible = false;
    this.visibilityChange.emit(this.isVisible);
  }
}
