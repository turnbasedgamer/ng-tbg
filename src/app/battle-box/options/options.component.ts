import { Component, OnInit } from '@angular/core';
import { Options } from './Options';
import { OptionsService } from './options.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  public options: Options;
  constructor(private optionsServ: OptionsService) { }

  ngOnInit() {
    this.options = this.optionsServ.getOptions();
  }

}