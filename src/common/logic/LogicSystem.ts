export class LogicSystem {
  public call(functionName: string, args: any[]) {
    let f = this.resolveFunction(functionName);
    f(...args);
  }

  private resolveFunction(functionName: string) {

  }
}

export class Functions {
  public getFunction(name: string) {
    return this.functions.find((f) => f.name === name)
  }

  private functions: Array<Function> = [
    {
      name: "TestFunction",
      func: (arg1: any, arg2: any) => {
        console.log(`Resolving function Test, with args ${arg1}, ${arg2}`);
      }
    }
  ];
}

class Function {
  public name: string;
  public func: any;
}
