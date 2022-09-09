import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WagesRoutingModule } from './wages-routing.module';
import { WagesComponent } from './wages.component';
import { WageInfoComponent } from 'src/app/shared/wage-info/wage-info.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [WagesComponent],
  imports: [WagesRoutingModule, SharedModule],
})
export class WagesModule {}
