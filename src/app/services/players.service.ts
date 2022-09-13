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
import { INewPlayerForm } from '../interfaces/new-player-form.interface';
import { FormGroup } from '@angular/forms';
import { TeamStat } from '../interfaces/TeamStat.interface';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  //players: IPlayer[];
  players$: BehaviorSubject<IPlayer[]> = new BehaviorSubject<IPlayer[]>([]);
  constructor() {
    //this.players = PLAYERS;
    //this.getPlayers();
    this.players$.next(PLAYERS);
  }
  /* getPlayers(): void {
    of(this.players).subscribe((x: IPlayer[]) => {
      this.players$.next(x);
    });
  } */
  getPlayers() {
    // return of(this.players);
    return this.players$;
  }
  getMostExpensivePlayer() {
    return this.players$.pipe(
      //    return of(this.players).pipe(
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
    /* return this.players$.pipe(
      map((players: IPlayer[]) => {
        let indexOfMostExpPlayer = 0;
        for (let i = 0; i < players.length; i++) {
          if (players[indexOfMostExpPlayer].wage < players[i].wage) {
            indexOfMostExpPlayer = i;
          }
        }
        return players[indexOfMostExpPlayer];
      })
    ); */
  }
  deletePlayer(id: number): void {
    /* let PLAYERS = this.players$.getValue();
    PLAYERS.splice(
      PLAYERS.findIndex((x) => x.id == id),
      1
    );
    this.getPlayers(); */
    let players = this.players$.getValue();
    players.splice(
      players.findIndex((x) => x.id == id),
      1
    );
    this.players$.next(players);
    // this.getPlayers();
  }
  getPlayer(id: number): Observable<IPlayer> {
    return from(this.players$.getValue()).pipe(
      filter((x: IPlayer, i: number) => {
        return x.id == id;
      })
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
    let players = this.players$.getValue();
    players.push(player);
    this.players$.next(players);
    //this.players.push(player);
    // this.getPlayers();
  }
  editPlayer(playerForm: FormGroup<INewPlayerForm>, playerId: number) {
    let player: IPlayer = {
      id: playerId,
      name: playerForm.value.name!,
      shirtNumber: playerForm.value.shirtNumber!,
      age: playerForm.value.age!,
      wage: playerForm.value.wage!,
      team: playerForm.value.team!,
      endOfContract: playerForm.value.endOfContract!,
    };
    let players = this.players$.getValue();

    players.splice(
      players.findIndex((x) => x.id == playerId),
      1,
      player
    );
    this.players$.next(players);
    // this.getPlayers();
  }
  playersWage(): Observable<number> {
    return this.players$.pipe(
      map((players: IPlayer[]) => {
        let sumWage: number = 0;
        players.forEach((p: IPlayer) => {
          sumWage += p.wage;
        });
        return sumWage;
      })
    );
    /* return this.players$.pipe(
      map((players: IPlayer[]) => {
        let sumWage: number = 0;
        players.forEach((p: IPlayer) => {
          sumWage += p.wage;
        });
        return sumWage;
      })
    ); */
  }
  getTeamStatistics(): Observable<TeamStat[]> {
    return this.players$.pipe(
      map((players: IPlayer[]) => {
        let teams: TeamStat[] = [];
        players.forEach((p: IPlayer) => {
          let correctTeam = teams.find((t: TeamStat) => t.teamName == p.team);
          if (correctTeam) {
            correctTeam.players.push(p);
            correctTeam.wage += p.wage;
          } else {
            teams.push({
              teamName: p.team,
              wage: p.wage,
              players: [p],
            });
          }
        });
        return teams;
      })
    );
  }
}
