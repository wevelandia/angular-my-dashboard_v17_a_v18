import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      /* Configuramos las rutas hijas */
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component'),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
      },
      {
        path: 'user/:id',
        title: 'User',
        loadComponent: () => import('./dashboard/pages/user/user.component'),
      },
      {
        path: 'users-list',
        title: 'Users',
        loadComponent: () => import('./dashboard/pages/users/users.component'),
      },
      {
        path: 'view-transition-1',
        title: 'View Transition 1',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition1.component'),
      },
      {
        path: 'view-transition-2',
        title: 'View Transition 2',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition2.component'),
      },
      {
        path: 'inputs-outputs',
        title: 'Inputs Outputs',
        loadComponent: () => import('./dashboard/pages/input-output/input-output.component'),
      },
      {
        path: 'Material',
        title: 'Angular Material',
        loadComponent: () => import('./dashboard/pages/material/material.component'),
      },
      {
        /* Añadimos un comodin */
        path: '',
        redirectTo: 'control-flow',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    //redirectTo: '/dashboard',
    // Ahora el redireccionamiento se puede manejar con redirectFunction
    redirectTo: (route) => {
      console.log(route);

      // Como es una funcion ahora podemos hacer aca una Inyección, por ejemplo preguntar si esta autenticado para enviarlo a otra pagina y si si lo esta entonces si lo pasamos a donde definimos.
      // const authService = inject(AuthService)
      // if (authService) { } else { }

      //return '/dashboard';
      // Si lo quiero redireccionar a Material
      return '/dashboard/Material';
    },
    pathMatch: 'full'
  }
];
