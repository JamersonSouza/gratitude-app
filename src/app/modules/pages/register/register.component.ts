import { Component } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { PasswordModule } from 'primeng/password';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../services/register/register.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { RouterModule, Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { AuthenticationService } from './../../services/auth/authentication.service';

@Component({
  selector: 'app-register',
  imports: [StepsModule, PasswordModule, NgClass, NgFor, ReactiveFormsModule, ToastModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: true
})
export class RegisterComponent {
  active: number = 0;
  steps = [0, 1];
  categories = ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4'];

  currentPage = 0;
  selectedCategories: string[] = [];
  registerForm: FormGroup;
  shouldRedirect = false;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private message: MessageService,
    private router: Router,
    private loginService : LoginService,
    private authenticationService : AuthenticationService
  ) {
    this.registerForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }

  register(): void {
    let user = this.registerForm.value;
    this.registerService.register(user).subscribe({
      next: () => {
        this.loginService.login({
          email: user.email,
          password: user.password,
        }).subscribe({
          next: (res) => {
            this.authenticationService.storeToken(res.accessToken);
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
            this.message.add({ severity: 'error', summary: 'Erro no login', detail: 'Falha no login automático.' });
          }
        });
      },
      error: (err) => {
        this.message.add({
          severity: 'error',
          summary: 'Erro',
          detail: err.error.detail,
        });
      },
    });
  }

  onToastClose() {
    if (this.shouldRedirect) {
      this.router.navigate(['/login']);
    }
  }

  setActiveStep(i: number) {
    this.active = i;
  }

  next() {
    if (this.active < this.steps.length - 1) {
      this.active++;
    }
  }

  previous() {
    if (this.active > 0) {
      this.active--;
    }
  }

  toggleCategory(category: string) {
    const index = this.selectedCategories.indexOf(category);
    if (index === -1) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories.splice(index, 1);
    }
  }

  isSelected(category: string): boolean {
    return this.selectedCategories.includes(category);
  }
}
