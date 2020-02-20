import functions from './Functions.json';

export class LogicSystem {
  public call(functionName: string, args: any[]) {
    let f: any = this.resolve(functionName);
    f(...args);
  }

  public resolve(name: string): any  {
    return this.functions.find((f) => f.name === name).func;
  }

  private functions: Array<Function> = [
    
  ];
}

export class Functions {
  
}

class Function {
  public name: string;
  public func: any;
}
