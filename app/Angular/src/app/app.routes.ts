import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'tareas',
    loadComponent: () =>
      import('./tareas/tareas.component').then((m) => m.TareasComponent),
  },
  {
    path: 'mesa',
    loadComponent: () =>
      import('./mesa/mesa.component').then((m) => m.MesaComponent),
  },
  {
    path: 'cliente',
    loadComponent: () =>
      import('./cliente/cliente.component').then((m) => m.ClienteComponent),
  },  
  {
    path: 'fecha',
    loadComponent: () =>
      import('./fecha-hora/fecha-hora.component').then((m) => m.FechaHoraComponent),
  },
  {
    path: 'reserva',
    loadComponent: () =>
      import('./reservas/reservas.component').then((m) => m.ReservasComponent),
  },
  {
    path: 'listareserva',
    loadComponent: () =>
      import('./lista-reservas/lista-reservas.component').then((m) => m.ListaReservasComponent),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
