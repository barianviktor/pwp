import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WagesService } from 'src/app/services/wages.service';
import { WageInfoBoxForm } from './wage-info-box-form';
import { IWageInfoBox } from '../../../interfaces/wage-info-box.interface';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent implements OnInit {
  inputForm: FormGroup<IWageInfoBox> = new WageInfoBoxForm();
  constructor(private wageService: WagesService) {
    wageService.currentMoney$.subscribe((x) => {
      this.currentMoney.patchValue(x);
    });
    wageService.currentMonthlyIncome$.subscribe((x) => {
      this.currentMonthlyIncome.patchValue(x);
    });
  }
  get currentMoney(): FormControl {
    return this.inputForm.get('currentMoney') as FormControl;
  }
  get currentMonthlyIncome(): FormControl {
    return this.inputForm.get('currentMonthlyIncome') as FormControl;
  }
  ngOnInit(): void {}

  changeCurrentMonthlyIncome() {
    if (this.currentMonthlyIncome.valid) {
      this.wageService.setCurrentMonthlyIncome(this.currentMonthlyIncome.value);
    }
  }
  changeCurrentMoney() {
    if (this.currentMoney.valid) {
      this.wageService.setCurrentMoney(this.currentMoney.value);
    }
  }
}
