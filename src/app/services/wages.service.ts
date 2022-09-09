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
    this.currentMoney$.next(4900);
    this.currentMonthlyIncome$.next(1200);
  }
}
