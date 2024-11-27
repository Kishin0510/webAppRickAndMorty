import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent: () => import('./characters/pages/characters-home/characters-home.component').then(m => m.CharactersHomeComponent)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];
