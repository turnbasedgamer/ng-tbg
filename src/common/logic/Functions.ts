export module Functions {
  export function getFunction(name: string): AnalyserOptions {
    return this.functions.find((f) => f.name === name).func;
  }

  const functions: Array<Function> = [
    { 
      name: "TestFunction",
      func: function(arg1: any, arg2: any) {
        console.log(`Resolving function Test, with args ${arg1}, ${arg2}`);
      }}
  ];
};

class Function {
  public name: string;
  public func: any;
};