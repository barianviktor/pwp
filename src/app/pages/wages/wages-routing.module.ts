import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WagesComponent } from './wages.component';

const routes: Routes = [{ path: '', component: WagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WagesRoutingModule {}
