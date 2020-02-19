import { Injectable } from '@angular/core';
import { Stat, Stats } from './stats';
import { BASIC_STATS } from './basic-stats';
import { LogService } from '../../../common/log/log.service';

@Injectable()
export class StatsService {

  constructor(private log: LogService) { }

  public getStatsFor(who: string): Stats {
    this.log.debug(`Loading Basic Stats for ${who}, ${JSON.stringify(BASIC_STATS)}`);
    return BASIC_STATS;
  }
}