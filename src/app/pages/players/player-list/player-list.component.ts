import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayer } from 'src/app/interfaces/IPlayer';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {
  //players: IPlayer[] = [];
  players$: Observable<IPlayer[]>;
  constructor(private playersService: PlayersService) {
    this.players$ = playersService.getPlayers();
  }

  ngOnInit(): void {}
  deletePlayer(id: number) {
    this.playersService.deletePlayer(id);
  }
}
