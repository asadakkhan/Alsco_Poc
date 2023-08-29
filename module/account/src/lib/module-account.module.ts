import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { moduleAccountRoutes } from './lib.routes';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(moduleAccountRoutes)],
  declarations: [LoginComponent, RegisterComponent],
})
export class ModuleAccountModule {}
