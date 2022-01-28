"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./../utils/consts");
const initGame_1 = require("./initGame");
class Board {
    constructor() {
        this.board = [new Array(), new Array(), new Array()];
    }
    loopBoard(func) {
        for (let y = 0; y < consts_1.BOARD_SIZE; y++) {
            for (let x = 0; x < consts_1.BOARD_SIZE; x++) {
                if (func(x, y))
                    return;
            }
        }
    }
    initBoard() {
        this.loopBoard((x, y) => {
            this.board[y][x] = undefined;
        });
    }
    placeCard({ x, y }, card) {
        this.board[y][x] = card;
    }
    isSquareEmpty({ x, y }) {
        return !this.board[y][x];
    }
    isCard(c) {
        return c ? 'id' in c : false;
    }
    isCardOnBoard(card) {
        return this.board.some((cardRow) => cardRow.some((c) => {
            if (this.isCard(c)) {
                return c.id === card.id;
            }
            else {
                return false;
            }
        }));
        // return this.board.some(c => {
        //   if (this.isCard(c)) {
        //     return c.id === card.id
        //   }
        // })
    }
    isCardInBoardByPos({ x, y }, card) {
        var _a, _b;
        return ((_a = this.board[y][x]) === null || _a === void 0 ? void 0 : _a.id) === card.id || ((_b = this.board[y][x]) === null || _b === void 0 ? void 0 : _b.pos) === card.pos;
    }
    consoleBoard(x, y) {
        if (x && y) {
            return console.log(this.board[y][x]);
        }
        else {
            this.loopBoard((x, y) => console.log(this.board[y][x]));
        }
    }
    isAllMatch() {
        for (let y = 0; y < consts_1.BOARD_SIZE; y++) {
            for (let x = 0; x < consts_1.BOARD_SIZE; x++) {
                if (!this.isMatch(x, y)) {
                    return false;
                }
            }
        }
        return true;
    }
    isMatch(x, y) {
        const theCard = this.board[y][x];
        const northCard = y > 0 ? this.board[y - 1][x] : undefined;
        const eastCard = x < consts_1.BOARD_SIZE - 1 ? this.board[y][x + 1] : undefined;
        const southCard = y < consts_1.BOARD_SIZE - 1 ? this.board[y + 1][x] : undefined;
        const westCard = x > 0 ? this.board[y][x - 1] : undefined;
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
    }
    isBoardFull() {
        for (let y = 0; y < consts_1.BOARD_SIZE; y++) {
            for (let x = 0; x < consts_1.BOARD_SIZE; x++) {
                if (!this.board[y][x])
                    return false;
            }
        }
        return true;
    }
    getLastCardCoor() {
        for (let y = 0; y < consts_1.BOARD_SIZE; y++) {
            for (let x = 0; x < consts_1.BOARD_SIZE; x++) {
                if (!this.board[y][x]) {
                    return x === 0 ? { x: 2, y: y - 1 } : { x: x - 1, y: y };
                }
            }
        }
        return { x: 2, y: 2 };
    }
    isLastCardWasFullyRotated() {
        const { x, y } = this.getLastCardCoor();
        const lastCard = this.board[y][x];
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
    }
    returnCardToQueue() {
        const { x, y } = this.getLastCardCoor();
        initGame_1.cardsQueue.addCard(this.board[y][x]);
        this.board[y][x] = undefined;
    }
    rotateLastCard() {
        const { x, y } = this.getLastCardCoor();
        const lastCard = this.board[y][x];
        lastCard === null || lastCard === void 0 ? void 0 : lastCard.rotateRight();
    }
}
exports.default = Board;
//# sourceMappingURL=Board.js.map