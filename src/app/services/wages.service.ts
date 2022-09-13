import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WagesService {
  currentMoney$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  currentMonthlyIncome$: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );
  constructor() {
    this.currentMoney$.next(225000);
    this.currentMonthlyIncome$.next(90000);
  }
  setCurrentMoney(value: number) {
    this.currentMoney$.next(value);
  }
  setCurrentMonthlyIncome(value: number) {
    this.currentMonthlyIncome$.next(value);
  }
}
