import challenges from './Challenges.json';

export class Challenges {
  private challengeArray = new Array<Challenge>();

  constructor() {
    for(let c of challenges) {
      this.challengeArray.push(new Challenge(c.name, c.cardinal, c.rating));
    }
    this.getChallengeRating(1);
  }

  getChallengeRating(difficulty: number, attributeLevel?: number) {
    if(attributeLevel) {
      return this.challengeArray.find((c) => {
        return c.difficulty === difficulty;
      }).getLevelledRating(attributeLevel);
    }
    return this.challengeArray.find((c) => {
        return c.difficulty === difficulty;
      }).rating;
;  }
}

export class Challenge {
  public name: string;
  public difficulty: number;
  public rating: number;

  constructor(name: string, cardinal: number, rating: number) {
    this.name = name;
    this.difficulty = cardinal;
    this.rating = rating;
  }

  public getLevelledRating(attribute: number) {
    return this.rating + (attribute * challenges.LevelledChallengeModifier)
  }
}