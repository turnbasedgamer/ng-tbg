import { Stats, Stat } from './stats';

export const BASIC_STATS: Stats = new Stats([
  new Stat('Health', 100, 0, 80),
  new Stat('Stamina', 80, 5, 45)
]);