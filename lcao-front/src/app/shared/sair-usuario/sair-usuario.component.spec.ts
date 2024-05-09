import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SairUsuarioComponent } from './sair-usuario.component';

describe('SairUsuarioComponent', () => {
  let component: SairUsuarioComponent;
  let fixture: ComponentFixture<SairUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SairUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SairUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
