import { Injectable } from '@angular/core';
import { Options } from './options';
import { BASIC_OPTIONS } from './basic-options';

@Injectable()
export class OptionsService {

  constructor() { }

  public getOptions(): Options {
    return BASIC_OPTIONS;
  }

}