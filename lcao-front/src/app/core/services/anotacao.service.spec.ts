import { TestBed } from '@angular/core/testing';

import { AnotacaoService } from './anotacao.service';

describe('AnotacaoService', () => {
  let service: AnotacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnotacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
