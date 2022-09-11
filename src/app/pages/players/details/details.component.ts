import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { IPlayer } from 'src/app/interfaces/IPlayer';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  // player$: Observer<IPlayer>;
  player$?: Observable<IPlayer>;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayersService
  ) {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.player$ = playerService.getPlayer(params['id']);
    });
  }

  ngOnInit(): void {}
}
