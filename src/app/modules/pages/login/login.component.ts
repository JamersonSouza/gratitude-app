import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { RouterModule, Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AuthenticationService } from '../../services/auth/authentication.service';

@Component({
    selector: 'app-login',
    imports: [ButtonModule, InputTextModule, ToastModule, RouterModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    standalone: true
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private formBuilder : FormBuilder, private loginService : LoginService,
    private router : Router, private message : MessageService, private authenticationService : AuthenticationService
  ){
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  login(): void{
     let login = this.loginForm.value;
      this.loginService.login(login).subscribe({
          next: (res) => {
            this.authenticationService.storeToken(res.token);
            this.router.navigate(['/dashboard'], {
               state: {
                  toast: {
                    severity: 'success',
                    summary: 'Autenticação',
                    detail: 'Login realizado com sucesso!'
                  }
                }
            });
          },
          error: (err) => {
            this.message.add({ severity: 'error', summary: 'Erro', detail: err.error.detail });
          }
        });
  }

}
