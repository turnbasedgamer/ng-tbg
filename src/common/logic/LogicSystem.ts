import { Functions } from './Functions';

export module LogicSystem {
  export function call(functionName: string, args: any[]) {
    let f: any = this.resolve(functionName);
    f(...args);
  }

  function resolve(name: string): any  {
    return Functions.getFunction(name);
  }

  
}

