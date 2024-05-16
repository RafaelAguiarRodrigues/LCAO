import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LembreteService } from 'src/app/core/services/lembrete.service';
import { Lembrete } from 'src/app/core/types/lembrete';

@Component({
  selector: 'app-excluir-lembrete',
  templateUrl: './excluir-lembrete.component.html',
  styleUrls: ['./excluir-lembrete.component.scss']
})
export class ExcluirLembreteComponent implements OnInit {
  lembrete: Lembrete = {
    id: '',
    titulo: '',
    descricao: '',
    prioridade: '',
    data: new Date(),
    modelo: '',
    usuario_id: ''
  };

  constructor(private service: LembreteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id') as string;
    this.lembrete.id = idParam;
  }

  excluirLembrete() {
    if (this.lembrete.id && this.lembrete.id != null) {
      this.service.excluir(this.lembrete.id).subscribe(() => {
        this.router.navigate(['/listarLembrete']);
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarLembrete']);
  }
}
