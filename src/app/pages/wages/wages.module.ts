import { NgModule } from '@angular/core';

import { WagesRoutingModule } from './wages-routing.module';
import { WagesComponent } from './wages.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [WagesComponent],
  imports: [WagesRoutingModule, SharedModule],
})
export class WagesModule {}
