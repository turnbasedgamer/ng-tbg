import attributes from './AttributeRUles.json';

export class Dice {
  private attributeBonus = new Map<number, number[]>();

  constructor() {
    for(let d in attributes.AttributeDice) {
      this.attributeBonus.set(+d, attributes.AttributeDice);
    }
  }

  public roll(attributeLevel: number): DiceRoll {
    let d = new DiceRoll();
    d.addDie(20); // base throw
    for(let a of this.attributeBonus.get(attributeLevel)) {
      d.addDie(a);
    }
    return d; 
  }

  public getAdditionalDiceForAttributeLevel(al: number): string[] {
    return this.attributeBonus.get(al).map((a) => {
      return '1d'+a;
    });
  }

  public getCombinedAdditionalDiceForAttributeLevel(al: number): string {
    if(!this.attributeBonus.has(al) || !this.attributeBonus.get(al).length) {
      return "";
    }
    return this.attributeBonus.get(al).length + "d" + this.attributeBonus.get(al)[0];
  }
}

export class DiceRoll {
  public result: number = 0;
  public breakdown: number[] = [];
  public diceUsed: number[] = [];

  public addDie(sides: number) {
    this.diceUsed.push(sides);
    let roll = this.dieRoll(sides);
    this.result += roll;
    this.breakdown.push(roll);
    if(roll === sides) //die explodes for another roll!
      this.addDie(sides);
  }

  private dieRoll(sides: number) {
    if(sides === 0)
      return 0;
    return (Math.random()*sides) + 1;
  }
}