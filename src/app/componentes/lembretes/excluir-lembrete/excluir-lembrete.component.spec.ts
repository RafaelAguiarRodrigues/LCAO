import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirLembreteComponent } from './excluir-lembrete.component';

describe('ExcluirLembreteComponent', () => {
  let component: ExcluirLembreteComponent;
  let fixture: ComponentFixture<ExcluirLembreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirLembreteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirLembreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
