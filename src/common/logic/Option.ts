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
  private jasonrpc: JSONRPC;
  private func: any;

  constructor(rpc: string) {
    this.jasonrpc = JSON.parse(rpc);
  }

  public call() {
    if(!this.func) {
      this.func = LogicSystem.loadFunction(this.jasonrpc.method);
    }
    this.func(...this.jasonrpc.params);
  }
}


export class JSONRPC {
  public jsonrpc: string;
  public method: string;
  public params: any[];
  public id: number;
}
