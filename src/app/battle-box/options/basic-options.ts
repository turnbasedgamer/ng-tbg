import { Options } from './options';
import { Option } from './option/option';

export const BASIC_OPTIONS: Options = new Options([
  new Option('Attack', null, 'Quick Melee Attack'),
  new Option('Guard', null, 'Defend Possible Attack'),
  new Option('Use Item', null, 'User Inventory Item')
]);