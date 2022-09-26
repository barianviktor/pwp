import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayersService } from 'src/app/services/players.service';
import { TeamStat } from '../../../interfaces/TeamStat.interface';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  teams$: Observable<TeamStat[]>;
  constructor(private playersService: PlayersService) {
    this.teams$ = this.playersService.getTeamStatistics();
  }
  ngOnInit(): void {
    //this.teams = this.getTeamStatistics();
  }
  deletePlayer(id: number) {
    this.playersService.deletePlayer(id);
  }
}
