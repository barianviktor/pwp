import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    public route: ActivatedRoute,
    public router: Router,
    private playerService: PlayersService
  ) {
    this.route.params.subscribe((params) => {
      this.player$ = playerService.getPlayer(params['id']);
    });
  }
  onDeletePlayer() {
    this.playerService.deletePlayer(this.route.snapshot.params['id']);
    this.router.navigate(['/players']);
  }

  ngOnInit(): void {}
}
