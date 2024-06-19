import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirAnotacaoComponent } from './excluir-anotacao.component';

describe('ExcluirAnotacaoComponent', () => {
  let component: ExcluirAnotacaoComponent;
  let fixture: ComponentFixture<ExcluirAnotacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirAnotacaoComponent]
    });
    fixture = TestBed.createComponent(ExcluirAnotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
