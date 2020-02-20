
export class IOption {
  public id: string;
  public pool: string;
  public text: string;
  public description: string;
  public screen: string;
  public onActivate: Function;
  public prerequisits: Prerequisits;

  constructor(id: string, pool: string, text: string, description: string,
              screen: string, onActivate: Function, prerequisits: Prerequisits) {
    this.id = id;
    this.pool = pool;
    this.text = text;
    this.description = description;
    this.screen = screen;
    this.onActivate = onActivate;
    this.prerequisits = prerequisits;
  }
};

export class Prerequisits {

}
