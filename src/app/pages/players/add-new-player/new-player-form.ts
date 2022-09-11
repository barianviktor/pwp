import { FormControl, FormGroup, Validators } from '@angular/forms';
import { INewPlayerForm } from './new-player-form.interface';

export class NewPlayerForm extends FormGroup<INewPlayerForm> {
  constructor() {
    super({
      name: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      shirtNumber: new FormControl(1, {
        validators: [Validators.required],
        nonNullable: true,
      }),
      team: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      age: new FormControl(18, {
        validators: [Validators.required],
        nonNullable: true,
      }),
      wage: new FormControl(0, {
        validators: [Validators.required],
        nonNullable: true,
      }),
      endOfContract: new FormControl(null, {
        validators: [Validators.required],
      }),
    });
  }
}
