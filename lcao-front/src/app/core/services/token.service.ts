import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  salvarToken(token: string) {
    return localStorage.setItem(KEY, token)
  }

  excluirToken() {
    localStorage.removeItem(KEY)
  }

  retornarToken() {
    return localStorage.getItem(KEY) ?? ''
  }

  possuiToken() {
    const token = this.retornarToken();
    if (!token) return false;

    const tokenData = this.parseJwt(token);
    const agora = new Date().getTime() / 1000;
    if (agora > tokenData.exp) {
      this.excluirToken();
      return false;
    }

    return true;
  }

  private parseJwt(token: string) {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  }
}

