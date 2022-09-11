import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayer } from 'src/app/interfaces/IPlayer';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-wage-info',
  templateUrl: './wage-info.component.html',
  styleUrls: ['./wage-info.component.scss'],
})
export class WageInfoComponent implements OnInit {
  mep$: Observable<IPlayer>;
  constructor(private playerService: PlayersService) {
    this.mep$ = playerService.getMostExpensivePlayer();
    /* playerService.players$.subscribe((players: IPlayer[]) => {
      play
    }); */
  }

  ngOnInit(): void {}
}
