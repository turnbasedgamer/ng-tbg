export class Stats {
  private statArray: Stat[];

  // Let's make sure stat codes are unique, or this may cause havok later.
  constructor(statArray: Stat[]) {
    this.statArray = [];
    for(const stat of statArray) {
      if(this.statArray.findIndex((s) => {s.code === stat.code}) === -1) {
        this.statArray.push(stat);
      }
    }
  }

  getStats(): Stat[] {
    return this.statArray;
  }

  getStatByCode(code: string): Stat {
    return this.statArray.find((s) => s.code === code);
  }

  getStatByName(name: string): Stat {
    return this.statArray.find((s) => s.name === name);
  }
};

export class Stat {
  public code: string; //HEA = Health, shorthand for commands
  public name: string;
  public current: number;
  public max: number;
  public min: number;

  constructor(name: string, min: number, max: number, current: number) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.current = current;
    this.code = name.substr(0, 3);
  }
}