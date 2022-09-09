import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewPlayerComponent } from './add-new-player/add-new-player.component';
import { DetailsComponent } from './details/details.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayersComponent } from './players.component';

const routes: Routes = [
  {
    path: '',
    component: PlayersComponent,
    children: [
      {
        path: '',
        component: PlayerListComponent,
      },
      { path: 'new', component: AddNewPlayerComponent },
      { path: ':id', component: DetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayersRoutingModule {}
