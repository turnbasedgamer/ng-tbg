import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBarComponent } from './game-bar/game-bar.component';
import { BattleBoxComponent } from './battle-box/battle-box.component';
import { StatsComponent } from './battle-box/stats/stats.component';
import { StatsService } from './battle-box/stats/stats.service';
import { StatComponent } from './battle-box/stats/stat/stat.component';

import { LogComponent } from './log/log.component';
import { LogService } from './log/log.service';
import { OptionsComponent } from './battle-box/options/options.component';
import { OptionComponent } from './battle-box/options/option/option.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, GameBarComponent, BattleBoxComponent, StatsComponent, StatComponent, LogComponent, OptionsComponent, OptionComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ LogService, StatsService ]
})
export class AppModule { }
