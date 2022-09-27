import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayersService } from 'src/app/services/players.service';
import { WagesService } from 'src/app/services/wages.service';

@Component({
  selector: 'app-wage-info-box',
  templateUrl: './wage-info-box.component.html',
  styleUrls: ['./wage-info-box.component.scss'],
})
export class WageInfoBoxComponent implements OnInit {
  currentMoney$: Observable<number>;
  currentMonthlyIncome$: Observable<number>;
  playersSumWage$: Observable<number>;
  constructor(
    private wageService: WagesService,
    private playersService: PlayersService
  ) {
    this.currentMoney$ = wageService.currentMoney$;
    this.currentMonthlyIncome$ = wageService.currentMonthlyIncome$;
    this.playersSumWage$ = playersService.playersWage();
  }
  ngOnInit(): void {}
  calculateStability(
    playersWage: number,
    currentMonthlyIncome: number,
    currentMoney: number
  ) {
    if (playersWage! <= currentMonthlyIncome!) {
      //tobb a bevetel mint a kiadas
      return 'The club is financial stable';
    } else {
      let i = 0;
      currentMoney = currentMoney! + (currentMonthlyIncome! - playersWage!);

      while (currentMoney! > 0) {
        i++;
        currentMoney = currentMoney! + (currentMonthlyIncome! - playersWage!);
        console.log(currentMoney);
      }

      return `The club’s financial reserves run out after ${i} month`;
    }
  }
}
