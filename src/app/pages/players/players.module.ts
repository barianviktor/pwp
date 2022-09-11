import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { AddNewPlayerComponent } from './add-new-player/add-new-player.component';
import { DetailsComponent } from './details/details.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PlayersComponent,
    AddNewPlayerComponent,
    DetailsComponent,
    PlayerListComponent,
  ],
  imports: [CommonModule, PlayersRoutingModule, ReactiveFormsModule],
})
export class PlayersModule {}
