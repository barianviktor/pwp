import { IPlayer } from 'src/app/interfaces/IPlayer';

export interface TeamStat {
  teamName: string;
  wage: number;
  players: IPlayer[];
}
