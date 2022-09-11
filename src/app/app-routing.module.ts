import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'players',
    loadChildren: () =>
      import('./pages/players/players.module').then((m) => m.PlayersModule),
  },
  {
    path: 'wages',
    loadChildren: () =>
      import('./pages/wages/wages.module').then((m) => m.WagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
