import { ButtonModule } from 'primeng/button';
import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-login',
    imports: [ButtonModule, InputTextModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    standalone: true
})
export class LoginComponent {

  constructor(private formBuilder : FormBuilder){
    //to do
  }

  login(): void{
    //to do
  }

}
