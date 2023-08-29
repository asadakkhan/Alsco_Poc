import { Route } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

export const moduleAccountRoutes: Route[] = [
   {path: 'login', pathMatch: 'full', component: LoginComponent}, 
   {path: 'register', pathMatch: 'full', component: RegisterComponent} 
];
