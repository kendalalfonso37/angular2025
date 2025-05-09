import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent
  },
  {
    path: "auth",
    component: AuthLayoutComponent
  }

];
