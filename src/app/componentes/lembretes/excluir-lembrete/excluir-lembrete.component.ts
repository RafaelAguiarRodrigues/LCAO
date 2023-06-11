import { Component, OnDestroy, OnInit } from '@angular/core';
import { LembreteService } from '../../../service/lembrete.service';
import { Lembrete } from '../../../interface/lembrete';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-excluir-lembrete',
  templateUrl: './excluir-lembrete.component.html',
  styleUrls: ['./excluir-lembrete.component.css']
})
export class ExcluirLembreteComponent implements OnInit {
  lembrete: Lembrete = {
    id: 0,
    titulo: '',
    descricao: '',
    prioridade: '',
    data: new Date(),
    modelo: ''
  };

  constructor(private service: LembreteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.lembrete.id = idParam ? +idParam : 0;
  }

  excluirLembrete() {
    if (this.lembrete.id && this.lembrete.id != 0) {
      this.service.excluir(this.lembrete.id).subscribe(() => {
        this.router.navigate(['/listarLembrete']);
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarLembrete']);
  }
}
