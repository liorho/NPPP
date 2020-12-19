"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var Board = /** @class */ (function () {
    function Board() {
        this.board = [new Array(3), new Array(3), new Array(3)];
    }
    Board.prototype.placeCard = function (card, x, y) {
        this.board[y][x] = card;
    };
    Board.prototype.console = function (x, y) {
        if (x && y)
            return console.log(this.board[y][x]);
        console.log(this.board);
    };
    return Board;
}());
exports.Board = Board;
//# sourceMappingURL=Board.js.map