import { Sides } from '../utils/types';

export default class Card {
  sides: Sides;
  _id: number;

  constructor(id: number, sides: Sides) {
    this._id = id;
    this.sides = sides;
  }

  rotateRight(): void {
    let newNorth = this.sides.west;
    this.sides = {
      north: newNorth,
      east: this.sides.north,
      south: this.sides.east,
      west: this.sides.south,
    };
  }
}
