import { CARD_POS } from './../utils/consts';
import { Sides } from '../utils/types';

export default class Card {
  sides: Sides;
  _id: number;
  _rotateCount: number;

  constructor(id: number, sides: Sides) {
    this._id = id;
    this.sides = sides;
    this._rotateCount = 0;
  }

  rotateRight(): void {
    this._rotateCount = this._rotateCount === CARD_POS ? 0 : ++this._rotateCount ;
    let newNorth = this.sides.west;
    this.sides = {
      north: newNorth,
      east: this.sides.north,
      south: this.sides.east,
      west: this.sides.south,
    };
  }

  isFullyRotated(): boolean {
    return this._rotateCount === 3 ? true : false;
  }

  getByPos(pos: number) {
    while (this._rotateCount !== pos) {
      this.rotateRight;
    }
    return this;
  }

  get id(): number {
    return this._id;
  }
  get pos(): number {
    return this._rotateCount;
  }
}
