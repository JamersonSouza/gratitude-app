import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from '../splash/splash.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

export const routes : Routes = [
  { path: '', component: SplashComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule  { }
