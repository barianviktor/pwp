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
  constructor(private playersService: PlayersService) {
    this.teams$ = this.playersService.getTeamStatistics();
  }
  teams$: Observable<TeamStat[]>;
  ngOnInit(): void {
    //this.teams = this.getTeamStatistics();
  }
  deletePlayer(id: number) {
    this.playersService.deletePlayer(id);
  }
}
