import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IPlayer } from 'src/app/interfaces/IPlayer';
import { PlayersService } from 'src/app/services/players.service';
import { NewPlayerForm } from '../new-player-form';
import { INewPlayerForm } from '../../../interfaces/new-player-form.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  //player$?: Observable<IPlayer>;
  npForm: FormGroup<INewPlayerForm> = new NewPlayerForm();
  player$: Observable<IPlayer>;
  constructor(
    public route: ActivatedRoute,
    private playerService: PlayersService,
    private router: Router
  ) {
    this.player$ = this.playerService.getPlayer(route.snapshot.params['id']);
    this.route.params.subscribe((params) => {
      //this.player$ = playerService.getPlayer(params['id']);
      playerService.getPlayer(params['id']).subscribe((p: IPlayer) => {
        this.name.patchValue(p.name);
        this.shirtNumber.patchValue(p.shirtNumber);
        this.team.patchValue(p.team);
        this.age.patchValue(p.age);
        this.wage.patchValue(p.wage);
        this.endOfContract.patchValue(p.endOfContract);
      });
    });
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
    if (this.npForm.valid) {
      console.log(this.npForm);
      this.playerService.editPlayer(
        this.npForm,
        this.route.snapshot.params['id']
      );
      this.router.navigate(['/players', this.route.snapshot.params['id']]);
    } else {
      this.npForm.markAllAsTouched();
    }
  }
}
