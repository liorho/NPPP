"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card = /** @class */ (function () {
    function Card(id, sides) {
        this._id = id;
        this.sides = sides;
        this._rotateCount = 0;
    }
    Card.prototype.rotateRight = function () {
        this._rotateCount++;
        var newNorth = this.sides.west;
        this.sides = {
            north: newNorth,
            east: this.sides.north,
            south: this.sides.east,
            west: this.sides.south,
        };
    };
    Card.prototype.isFullyRotated = function () {
        return this._rotateCount === 3 ? true : false;
    };
    return Card;
}());
exports.default = Card;
//# sourceMappingURL=Card.js.map