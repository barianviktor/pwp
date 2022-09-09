import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayersComponent } from './pages/players/players.component';
import { WagesComponent } from './pages/wages/wages.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StatisticsBoxComponent } from './components/statistics-box/statistics-box.component';
import { WageInfoComponent } from './shared/wage-info/wage-info.component';
import { SharedModule } from './shared/shared/shared.module';
import { PlayersModule } from './pages/players/players.module';
import { WagesModule } from './pages/wages/wages.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    StatisticsBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PlayersModule,
    WagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
