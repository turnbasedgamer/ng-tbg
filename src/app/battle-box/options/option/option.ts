export class Option {
  public text: string;
  public hint: string;
  public action: any;

  constructor(text: string, action: any, hint: string) {
    this.text = text;
    this.action = action;
    this.hint = hint;
  }
}