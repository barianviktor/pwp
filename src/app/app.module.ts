import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayersComponent } from './pages/players/players.component';
import { WagesComponent } from './pages/wages/wages.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlayersModule } from './pages/players/players.module';
import { WagesModule } from './pages/wages/wages.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlayersModule,
    WagesModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
