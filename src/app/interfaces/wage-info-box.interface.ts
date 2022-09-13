import { FormControl } from '@angular/forms';

export interface IWageInfoBox {
  currentMoney: FormControl<number>;
  currentMonthlyIncome: FormControl<number>;
}
