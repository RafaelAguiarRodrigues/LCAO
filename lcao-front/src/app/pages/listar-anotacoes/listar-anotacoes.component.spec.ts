import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAnotacoesComponent } from './listar-anotacoes.component';

describe('ListarAnotacoesComponent', () => {
  let component: ListarAnotacoesComponent;
  let fixture: ComponentFixture<ListarAnotacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAnotacoesComponent]
    });
    fixture = TestBed.createComponent(ListarAnotacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
