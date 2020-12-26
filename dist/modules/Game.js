"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initGame_1 = require("./initGame");
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.placeCardOnBoard = function () {
        initGame_1.board.placeCard(initGame_1.cardsQueue.getCard());
    };
    Game.prototype.isGameOver = function () {
        // check if everything match
        if (initGame_1.board.isAllMatch()) {
            return initGame_1.board.isBoardFull() ? true : false;
        }
        return false;
    };
    Game.prototype.runGame = function () {
        // if (this.isGameOver()) {
        //   return true;
        // }
        if (initGame_1.board.isAllMatch()) {
            if (initGame_1.board.isBoardFull()) {
                return true;
            }
            else {
                this.placeCardOnBoard();
                return this.runGame();
            }
        }
        else {
            if (initGame_1.board.isLastCardWasFullyRotated()) {
                //            yes - return it to queue
                initGame_1.board.returnCardToQueue();
                if (initGame_1.cardsQueue.isRepeat()) {
                    initGame_1.board.returnCardToQueue();
                }
                this.placeCardOnBoard();
                return this.runGame();
            }
            else {
                //            no - rotate the card O(then check again)
                initGame_1.board.rotateLastCard();
                return this.runGame();
            }
        }
    };
    return Game;
}());
exports.default = Game;
//# sourceMappingURL=Game.js.map