import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'account',
        loadChildren: () =>
        import('module/account').then((m) => m.ModuleAccountModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
        import('module/dashboard').then((m) => m.DashboardModule),
      },
];
