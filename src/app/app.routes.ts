import { Routes } from '@angular/router';
import { LoginComponent } from './modules/pages/login/login.component';
import { SplashComponent } from './modules/pages/splash/splash.component';
export const routes: Routes = [
  {path: '', component: SplashComponent},
  {
    path: 'login', component: LoginComponent
  }
];
