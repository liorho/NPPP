import { Sides } from './types';

export default class Card {
  sides: Sides;
  _id: number

  constructor(id: number, sides: Sides) {
    this._id = id
    this.sides = sides;
  }
}
