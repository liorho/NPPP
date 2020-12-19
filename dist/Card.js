"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card = /** @class */ (function () {
    function Card(id, sides) {
        this._id = id;
        this.sides = sides;
    }
    Card.prototype.rotateRight = function () {
        var newNorth = this.sides.west;
        this.sides = {
            north: newNorth,
            east: this.sides.north,
            south: this.sides.east,
            west: this.sides.south,
        };
    };
    return Card;
}());
exports.default = Card;
//# sourceMappingURL=Card.js.map