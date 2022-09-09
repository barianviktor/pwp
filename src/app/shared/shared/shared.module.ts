import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WageInfoComponent } from '../wage-info/wage-info.component';

@NgModule({
  declarations: [WageInfoComponent],
  imports: [CommonModule],
  exports: [WageInfoComponent, CommonModule],
})
export class SharedModule {}
