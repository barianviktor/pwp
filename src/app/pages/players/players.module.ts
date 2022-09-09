import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { AddNewPlayerComponent } from './add-new-player/add-new-player.component';
import { DetailsComponent } from './details/details.component';
import { PlayerListComponent } from './player-list/player-list.component';

@NgModule({
  declarations: [
    PlayersComponent,
    AddNewPlayerComponent,
    DetailsComponent,
    PlayerListComponent,
  ],
  imports: [CommonModule, PlayersRoutingModule],
})
export class PlayersModule {}
