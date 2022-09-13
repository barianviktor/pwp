import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IWageInfoBox } from '../../../interfaces/wage-info-box.interface';

export class WageInfoBoxForm extends FormGroup<IWageInfoBox> {
  constructor() {
    super({
      currentMoney: new FormControl(0, {
        validators: Validators.required,
        nonNullable: true,
      }),
      currentMonthlyIncome: new FormControl(0, {
        validators: Validators.required,
        nonNullable: true,
      }),
    });
  }
}
