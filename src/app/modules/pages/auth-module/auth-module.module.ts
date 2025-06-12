import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from '../splash/splash.component';
import { LoginComponent } from '../login/login.component';

export const routes : Routes = [
  { path: '', component: SplashComponent },
  {path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule  { }
