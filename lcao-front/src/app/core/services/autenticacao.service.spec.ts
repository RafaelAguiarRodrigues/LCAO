/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { AutenticacaoService } from './autenticacao.service';

describe('Service: Usuario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutenticacaoService]
    });
  });

  it('should ...', inject([AutenticacaoService], (service: AutenticacaoService) => {
    expect(service).toBeTruthy();
  }));
});
