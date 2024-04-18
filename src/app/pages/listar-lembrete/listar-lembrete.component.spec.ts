import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLembreteComponent } from './listar-lembrete.component';

describe('ListarLembreteComponent', () => {
  let component: ListarLembreteComponent;
  let fixture: ComponentFixture<ListarLembreteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarLembreteComponent]
    });
    fixture = TestBed.createComponent(ListarLembreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
