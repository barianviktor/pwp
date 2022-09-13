import { NgModule } from '@angular/core';

import { WagesRoutingModule } from './wages-routing.module';
import { WagesComponent } from './wages.component';
import { WageInfoBoxComponent } from './wage-info-box/wage-info-box.component';
import { TeamsComponent } from './teams/teams.component';
import { InputsComponent } from './inputs/inputs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    WagesComponent,
    WageInfoBoxComponent,
    TeamsComponent,
    InputsComponent,
  ],
  imports: [WagesRoutingModule, CommonModule, ReactiveFormsModule],
})
export class WagesModule {}
