import { FormControl } from '@angular/forms';

export interface INewPlayerForm {
  name: FormControl<string>;
  shirtNumber: FormControl<number>;
  team: FormControl<string>;
  age: FormControl<number>;
  wage: FormControl<number>;
  endOfContract: FormControl<Date | null>;
}
