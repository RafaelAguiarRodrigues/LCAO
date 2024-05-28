import { TokenService } from './../services/token.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.retornarToken();
    if (this.tokenService.possuiToken()) {
      request = request.clone({
        setHeaders: ({
          'Authorization': `Bearer ${token}`,
          'Content-type': 'application/json'
        })
      });
    }
    return next.handle(request);
  }
}
