import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAction } from '../../../common/logic/IAction';
import { Option } from './option';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  @Input() option: Option;

  @Output() action: EventEmitter<IAction> = new EventEmitter<IAction>();

  constructor() { }

  ngOnInit() {
  }

  actionOption() {
    this.action.emit(this.option.action);
  }

}