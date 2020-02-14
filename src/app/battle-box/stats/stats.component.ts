import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from './stats.service';
import { Stats } from './stats';
import { LogService } from './../../log/log.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  @Input() who: string;
  public stats: Stats;

  constructor(private statsServe: StatsService, private log: LogService) {
    
  }

  ngOnInit() {
    this.stats = this.statsServe.getStatsFor(this.who);
    //this.log.debug(`Loading Stats for '${this.who}': ${JSON.stringify(this.stats, null, 4)}`);
  }

}