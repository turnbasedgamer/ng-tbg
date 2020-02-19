import { Component, OnInit } from '@angular/core';
import { Options } from './Options';
import { OptionsService } from './options.service';
import { LogService } from '../../../common/log/log.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  public options: Options;
  constructor(private optionsServ: OptionsService, private log: LogService) { }

  ngOnInit() {
    this.options = this.optionsServ.getOptions();
  }

  optionAction(action: any) {
    this.log.debug(`Action: ${JSON.stringify(action)}`);
  }

}