import { Option } from './option/option';

export class Options {
  public optionArray: Option[];

  constructor(optionArray: Option[]) {
    this.optionArray = optionArray;
  }

  public getOptions(): Option[] {
    return this.optionArray;
  }

}