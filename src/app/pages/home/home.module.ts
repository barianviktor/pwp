import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { StatisticsBoxComponent } from './statistics-box/statistics-box.component';
import { WageInfoComponent } from './wage-info/wage-info.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, StatisticsBoxComponent, WageInfoComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
