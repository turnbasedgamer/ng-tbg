import SkillPool from './SkillPool';
import LogicSystem from './LogicSystem';

export class IOption {
  public id: string;
  public pool: SkillPool;
  public text: string;
  public description: string;
  public screen: Screen;
  public onActivate: Function;
  public prerequisits: Prerequisits;
};

export class Prerequisits {

}

export class SkillPool {
  public pool: string;
};

export class Screen {
  public name: string;
}

export class Function {
  private func: FuncWrapper;

  constructor(rpc: string) {
    this.func = JSON.parse(rpc);
  }

  public call() {
    LogicSystem.call(this.func.method, this.func.params)
  }
}


export class FuncWrapper {
  public method: string;
  public params: any[];
}
