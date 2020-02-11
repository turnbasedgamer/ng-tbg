import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBarComponent } from './game-bar/game-bar.component';
import { BattleBoxComponent } from './battle-box/battle-box.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, GameBarComponent, BattleBoxComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
