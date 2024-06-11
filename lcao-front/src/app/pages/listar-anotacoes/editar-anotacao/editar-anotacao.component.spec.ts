import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAnotacaoComponent } from './editar-anotacao.component';

describe('EditarAnotacaoComponent', () => {
  let component: EditarAnotacaoComponent;
  let fixture: ComponentFixture<EditarAnotacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAnotacaoComponent]
    });
    fixture = TestBed.createComponent(EditarAnotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
