import { Component, OnInit, Input } from '@angular/core';
import { StatsService } from './stats.service';
import { Stats } from './stats';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  @Input() who: string;
  public stats: Stats;

  constructor(public statsServe: StatsService) {
    this.stats = new Stats(statsServe.getStatsFor(this.who));
  }

  ngOnInit() {

  }

}