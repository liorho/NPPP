"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("../utils/consts");
var Board = /** @class */ (function () {
    function Board() {
        this.board = [new Array(), new Array(), new Array()];
    }
    Board.prototype.loopBoard = function (func) {
        for (var y = 0; y < consts_1.BOARD_SIZE; y++) {
            for (var x = 0; x < consts_1.BOARD_SIZE; x++) {
                if (func(x, y))
                    return;
            }
        }
    };
    Board.prototype.initBoard = function () {
        var _this = this;
        this.loopBoard(function (x, y) {
            _this.board[y][x] = undefined;
        });
    };
    Board.prototype.placeCard = function (card) {
        var _this = this;
        this.loopBoard(function (x, y) {
            if (!_this.board[y][x]) {
                return (_this.board[y][x] = card);
            }
        });
    };
    Board.prototype.consoleBoard = function (x, y) {
        if (x && y)
            return console.log(this.board[y][x]);
        console.log(this.board);
    };
    return Board;
}());
exports.default = Board;
//# sourceMappingURL=Board.js.map