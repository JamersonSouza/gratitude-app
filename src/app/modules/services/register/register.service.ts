import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../../model/register-form';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/config/app.config';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

 constructor(private http : HttpClient) { }

 register(registerForm : RegisterForm):Observable<any>{
  return this.http.post<any>(`${API_URL.baseURL}/user`, registerForm);
 }

}
