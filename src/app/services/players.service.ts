import { Injectable } from '@angular/core';
import { IPlayer } from '../interfaces/IPlayer';
import { PLAYERS } from 'src/mockData';
import {
  BehaviorSubject,
  combineLatest,
  filter,
  from,
  map,
  Observable,
  of,
  switchMap,
  tap,
  toArray,
} from 'rxjs';
import { INewPlayerForm } from '../pages/players/add-new-player/new-player-form.interface';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  players: IPlayer[];
  players$: BehaviorSubject<IPlayer[]> = new BehaviorSubject<IPlayer[]>([]);
  constructor() {
    this.players = PLAYERS;
    this.getPlayers();
  }
  getPlayers(): void {
    of(PLAYERS).subscribe((x: IPlayer[]) => {
      this.players$.next(x);
    });
  }
  getMostExpensivePlayer() {
    return this.players$.pipe(
      map((players: IPlayer[]) => {
        let indexOfMostExpPlayer = 0;
        for (let i = 0; i < players.length; i++) {
          if (players[indexOfMostExpPlayer].wage < players[i].wage) {
            indexOfMostExpPlayer = i;
          }
        }
        return players[indexOfMostExpPlayer];
      })
    );
  }
  deletePlayer(id: number): void {
    let PLAYERS = this.players$.getValue();
    PLAYERS.splice(
      PLAYERS.findIndex((x) => x.id == id),
      1
    );
    this.getPlayers();
  }
  getPlayer(id: number): Observable<IPlayer> {
    return from(PLAYERS).pipe(
      filter((x: IPlayer, i: number) => {
        return x.id == id;
      }),
      tap((x) => console.log(x))
    );
  }
  addPlayer(playerForm: FormGroup<INewPlayerForm>) {
    let player: IPlayer = {
      id: this.players$.getValue().length + 1,
      name: playerForm.value.name!,
      shirtNumber: playerForm.value.shirtNumber!,
      age: playerForm.value.age!,
      wage: playerForm.value.wage!,
      team: playerForm.value.team!,
      endOfContract: playerForm.value.endOfContract!,
    };

    this.players.push(player);
    this.getPlayers();
  }
  /*  getPlayersWage(): Observable<number> {
    return of(PLAYERS).pipe(
      map((x: IPlayer[]) => {
        let wageSum = 0;
        x.forEach((p) => {
          wageSum += p.wage;
        });
        console.log(wageSum);

        return wageSum;
      })
    );
  } */
}
