"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initGame_1 = require("./initGame");
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.placeCardOnBoard = function () {
        initGame_1.board.placeCard(initGame_1.cardsQueue.getCard());
    };
    Game.prototype.isGameOver = function (x) {
        if (x === void 0) { x = 1; }
        return x === 1 ? true : false;
    };
    return Game;
}());
exports.default = Game;
//# sourceMappingURL=Game.js.map