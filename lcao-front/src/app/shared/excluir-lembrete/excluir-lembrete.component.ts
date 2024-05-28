import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LembreteService } from 'src/app/core/services/lembrete.service';

@Component({
  selector: 'app-excluir-lembrete',
  templateUrl: './excluir-lembrete.component.html',
  styleUrls: ['./excluir-lembrete.component.scss']
})
export class ExcluirLembreteComponent implements OnInit {
  @Input() isVisible = false;
  @Input() id = '';
  @Output() visibilityChange = new EventEmitter<boolean>();

  constructor(
    private service: LembreteService,
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
