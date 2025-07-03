import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/config/app.config';
import { LoginForm } from '../../model/login-form';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  login(loginForm : LoginForm):Observable<any>{
      return this.http.post<any>(`${API_URL.baseURL}/login`, loginForm);
  }

}
