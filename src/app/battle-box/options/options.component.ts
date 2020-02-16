import { Component, OnInit } from '@angular/core';
import { LogService } from './../../log/log.service';
import { Options } from './Options';
import { OptionsService } from './options.service';

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

  optionAction(action: IAction) {
    this.log.debug(`Action: ${JSON.stringify(action)}`);
  }

}