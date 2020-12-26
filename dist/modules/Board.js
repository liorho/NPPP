"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("./../utils/consts");
var initGame_1 = require("./initGame");
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
        var _this = this;
        if (x && y) {
            return console.log(this.board[y][x]);
        }
        else {
            this.loopBoard(function (x, y) { return console.log(_this.board[y][x]); });
        }
    };
    Board.prototype.isAllMatch = function () {
        for (var y = 0; y < consts_1.BOARD_SIZE; y++) {
            for (var x = 0; x < consts_1.BOARD_SIZE; x++) {
                if (!this.isMatch(x, y)) {
                    return false;
                }
            }
        }
        return true;
    };
    Board.prototype.isMatch = function (x, y) {
        var theCard = this.board[y][x];
        var northCard = y > 0 ? this.board[y - 1][x] : undefined;
        var eastCard = x < consts_1.BOARD_SIZE - 1 ? this.board[y][x + 1] : undefined;
        var southCard = y < consts_1.BOARD_SIZE - 1 ? this.board[y + 1][x] : undefined;
        var westCard = x > 0 ? this.board[y][x - 1] : undefined;
        if (theCard) {
            if (northCard) {
                if (theCard.sides.north.part === northCard.sides.south.part || theCard.sides.north.type !== northCard.sides.south.type)
                    return false;
            }
            if (eastCard) {
                if (theCard.sides.east.part === eastCard.sides.west.part || theCard.sides.east.type !== eastCard.sides.west.type)
                    return false;
            }
            if (southCard) {
                if (theCard.sides.south.part === southCard.sides.north.part || theCard.sides.south.type !== southCard.sides.north.type)
                    return false;
            }
            if (westCard) {
                if (theCard.sides.west.part === westCard.sides.east.part || theCard.sides.west.type !== westCard.sides.east.type)
                    return false;
            }
        }
        return true;
    };
    Board.prototype.isBoardFull = function () {
        for (var y = 0; y < consts_1.BOARD_SIZE; y++) {
            for (var x = 0; x < consts_1.BOARD_SIZE; x++) {
                if (!this.board[y][x])
                    return false;
            }
        }
        return true;
    };
    Board.prototype.getLastCardCoor = function () {
        for (var y = 0; y < consts_1.BOARD_SIZE; y++) {
            for (var x = 0; x < consts_1.BOARD_SIZE; x++) {
                if (!this.board[y][x]) {
                    return x === 0 ? { x: 2, y: y - 1 } : { x: x - 1, y: y };
                }
            }
        }
        return { x: 2, y: 2 };
    };
    Board.prototype.isLastCardWasFullyRotated = function () {
        var _a = this.getLastCardCoor(), x = _a.x, y = _a.y;
        var lastCard = this.board[y][x];
        if (lastCard) {
            if (lastCard.isFullyRotated()) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    Board.prototype.returnCardToQueue = function () {
        var _a = this.getLastCardCoor(), x = _a.x, y = _a.y;
        initGame_1.cardsQueue.addCard(this.board[y][x]);
        this.board[y][x] = undefined;
    };
    Board.prototype.rotateLastCard = function () {
        var _a = this.getLastCardCoor(), x = _a.x, y = _a.y;
        var lastCard = this.board[y][x];
        lastCard === null || lastCard === void 0 ? void 0 : lastCard.rotateRight();
    };
    return Board;
}());
exports.default = Board;
//# sourceMappingURL=Board.js.map