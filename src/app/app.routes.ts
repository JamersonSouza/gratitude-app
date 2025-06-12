import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/pages/auth-module/auth-module.module').then(m => m.routes )
  }

];
