import { Route } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';

export const dashboardRoutes: Route[] = [
   {path: '', pathMatch: 'full', component: DashboardComponent} 
];
