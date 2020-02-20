import { LogicSystem } from './LogicSystem';

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