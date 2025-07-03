import { Component } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { PasswordModule } from 'primeng/password';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../services/register/register.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  imports: [StepsModule, PasswordModule, NgClass, NgFor, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  active: number = 0;
  steps = [0, 1];
  categories = ['Categoria 1', 'Categoria 2', 'Categoria 3', 'Categoria 4'];

  currentPage = 0;
  selectedCategories: string[] = [];
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private msg: MessageService
  ) {
    this.registerForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }

  register(): void {
    this.registerForm = this.registerForm.value;
    console.log(this.registerForm);
    this.registerService.register(this.registerForm).subscribe({
      next: (res) => {
        this.msg.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Usuário cadastrado com sucesso!',
        });
      },
      error: (err) => {
        this.msg.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Ocorreu um erro ao cadastro o usuário.',
        });
      },
    });
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
