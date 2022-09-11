import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IPlayer } from 'src/app/interfaces/IPlayer';
import { PlayersService } from 'src/app/services/players.service';
import { NewPlayerForm } from './new-player-form';
import { INewPlayerForm } from './new-player-form.interface';

@Component({
  selector: 'app-add-new-player',
  templateUrl: './add-new-player.component.html',
  styleUrls: ['./add-new-player.component.scss'],
})
export class AddNewPlayerComponent implements OnInit {
  npForm: FormGroup<INewPlayerForm> = new NewPlayerForm();
  constructor(private playerService: PlayersService, private router: Router) {
    console.log(this.npForm.controls);
  }
  get name(): FormControl {
    return this.npForm.get('name') as FormControl;
  }
  get shirtNumber(): FormControl {
    return this.npForm.get('shirtNumber') as FormControl;
  }
  get team(): FormControl {
    return this.npForm.get('team') as FormControl;
  }
  get age(): FormControl {
    return this.npForm.get('age') as FormControl;
  }
  get wage(): FormControl {
    return this.npForm.get('wage') as FormControl;
  }
  get endOfContract(): FormControl {
    return this.npForm.get('endOfContract') as FormControl;
  }

  ngOnInit(): void {}

  handleSubmit() {
    /*   this.name.patchValue('asd');
    this.team.patchValue('dsa');
    this.endOfContract.patchValue(new Date()); */
    if (this.npForm.valid) {
      this.playerService.addPlayer(this.npForm);
      this.router.navigate(['/players']);
    } else {
      this.npForm.markAllAsTouched();
      console.log(this.npForm);
    }
  }
}
