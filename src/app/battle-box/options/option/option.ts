import { IAction } from '../../../common/logic/IAction';

export class Option {
  public text: string;
  public hint: string;
  public action: IAction;

  constructor(text: string, action: IAction, hint: string) {
    this.text = text;
    this.action = action;
    this.hint = hint;
  }
}