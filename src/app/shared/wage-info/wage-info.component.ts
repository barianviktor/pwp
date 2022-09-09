import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayersService } from 'src/app/services/players.service';
import { WagesService } from 'src/app/services/wages.service';

@Component({
  selector: 'app-wage-info',
  templateUrl: './wage-info.component.html',
  styleUrls: ['./wage-info.component.scss'],
})
export class WageInfoComponent implements OnInit {
  currentMoney$: Observable<number>;
  currentMonthlyIncome$: Observable<number>;
  playersWages$: Observable<number>;
  constructor(
    private wageService: WagesService,
    private playersService: PlayersService
  ) {
    this.currentMoney$ = wageService.currentMoney$;
    this.currentMonthlyIncome$ = wageService.currentMonthlyIncome$;
    this.playersWages$ = playersService.getPlayersWage();
  }

  ngOnInit(): void {}
}
