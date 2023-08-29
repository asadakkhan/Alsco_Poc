import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './lib.routes';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SharedModule } from 'module/shared';

@NgModule({
  imports: [CommonModule,SharedModule, RouterModule.forChild(dashboardRoutes)],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
