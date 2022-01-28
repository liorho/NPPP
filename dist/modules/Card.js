"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./../utils/consts");
class Card {
    constructor(id, sides) {
        this._id = id;
        this.sides = sides;
        this._rotateCount = 0;
    }
    rotateRight() {
        this._rotateCount = this._rotateCount === consts_1.CARD_POS ? 0 : ++this._rotateCount;
        let newNorth = this.sides.west;
        this.sides = {
            north: newNorth,
            east: this.sides.north,
            south: this.sides.east,
            west: this.sides.south,
        };
    }
    isFullyRotated() {
        return this._rotateCount === 3 ? true : false;
    }
    getByPos(pos) {
        while (this._rotateCount !== pos) {
            this.rotateRight;
        }
        return this;
    }
    get id() {
        return this._id;
    }
    get pos() {
        return this._rotateCount;
    }
}
exports.default = Card;
//# sourceMappingURL=Card.js.map