import { Injectable } from '@angular/core';
import { Stat, Stats } from './stats';
import { BASIC_STATS } from './basic-stats';

@Injectable()
export class StatsService {

  constructor() { }

  public getStatsFor(who: string) {
    return BASIC_STATS;
  }
}