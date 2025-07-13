import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    private readonly TOKEN_KEY = 'auth_token';

  constructor() { }

    storeToken(token: string): void {
      localStorage.setItem(this.TOKEN_KEY, token);
    }

    getToken(): string | null {
      return localStorage.getItem(this.TOKEN_KEY);
    }

    clearToken(): void {
      localStorage.removeItem(this.TOKEN_KEY);
    }

    isAuthenticated(): boolean {
      return !!this.getToken();
    }
}
