import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-statistics-box',
  templateUrl: './statistics-box.component.html',
  styleUrls: ['./statistics-box.component.scss'],
})
export class StatisticsBoxComponent implements OnInit {
  numberOfPlayers: number = 0;
  wageOfPlayers: number = 0;

  constructor(private playerService: PlayersService) {
    playerService.players$.subscribe((x) => {
      console.log(x);
      this.numberOfPlayers = x.length;
      let wageSum = 0;
      x.forEach((p) => {
        wageSum += p.wage;
      });
      this.wageOfPlayers = wageSum;
    });
  }

  ngOnInit(): void {}
}
