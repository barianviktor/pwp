import { Injectable } from '@angular/core';
import { IPlayer } from '../interfaces/IPlayer';
import { PLAYERS } from 'src/mockData';
import {
  combineLatest,
  filter,
  from,
  map,
  Observable,
  of,
  switchMap,
  toArray,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  players: IPlayer[];

  constructor() {
    this.players = PLAYERS;
  }
  getPlayers(): Observable<IPlayer[]> {
    return of(PLAYERS);
  }
  getPlayersWage(): Observable<number> {
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
  }
  /* getPlayers(): Observable<IPlayer[]> {
    return from(this.mockData.players).pipe(
      switchMap((x: IPlayerDto) => {
        return combineLatest(of(x), this.getTeamFromId(x.team));
      }),
      map((x: any) => {
        let player: IPlayer = {
          ...x[0],
          team: x[1],
        };
        console.log(player);
        return player;
      }),
      toArray()
    );
  }
  getTeamFromId(id: number): Observable<ITeam> {
    return from(this.mockData.teams).pipe(
      filter((team: ITeam) => team.id == id)
    );
  }
  getPlayersWage(): Observable<number> {
    return of(this.mockData.players).pipe(
      map((x: IPlayerDto[]) => {
        let wageSum = 0;
        x.forEach((p) => {
          wageSum += p.wage;
        });
        return wageSum;
      })
    );
  }
  getPlayerFromId(id: number) {
    return from(this.mockData.players).pipe(
      filter((player: IPlayerDto) => player.id == id),
      switchMap((x: IPlayerDto) => {
        return combineLatest(of(x), this.getTeamFromId(x.team));
      }),
      map((x: any) => {
        let player: IPlayer = {
          ...x[0],
          team: x[1],
        };
        console.log(player);
        return player;
      })
    );
  } */
  // makePlayerFromPlayerDto()
}
