import { Stats, Stat } from './stats';

export const BASIC_STATS: Stats = new Stats([
  new Stat('Health', 0, 100, 80),
  new Stat('Stamina', 5, 80, 45)
]);