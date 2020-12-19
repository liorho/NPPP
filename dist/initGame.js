"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardsQueue = exports.board = void 0;
var CardsQueue_js_1 = require("./modules/CardsQueue.js");
var Card_1 = require("./modules/Card");
var Board_1 = require("./modules/Board");
// INIT BOARD
exports.board = new Board_1.default();
exports.board.initBoard();
// INIT CARDS QUEUE
exports.cardsQueue = new CardsQueue_js_1.default();
exports.cardsQueue.addCard(new Card_1.default(1, {
    north: { type: 'blue', part: 'head' },
    east: { type: 'pink', part: 'tail' },
    south: { type: 'blue', part: 'tail' },
    west: { type: 'purple', part: 'head' },
}));
exports.cardsQueue.addCard(new Card_1.default(2, {
    north: { type: 'pink', part: 'head' },
    east: { type: 'green', part: 'head' },
    south: { type: 'purple', part: 'head' },
    west: { type: 'blue', part: 'tail' },
}));
exports.cardsQueue.addCard(new Card_1.default(3, {
    north: { type: 'purple', part: 'tail' },
    east: { type: 'pink', part: 'tail' },
    south: { type: 'purple', part: 'tail' },
    west: { type: 'green', part: 'head' },
}));
exports.cardsQueue.addCard(new Card_1.default(4, {
    north: { type: 'purple', part: 'tail' },
    east: { type: 'green', part: 'tail' },
    south: { type: 'purple', part: 'head' },
    west: { type: 'green', part: 'tail' },
}));
exports.cardsQueue.addCard(new Card_1.default(5, {
    north: { type: 'pink', part: 'head' },
    east: { type: 'pink', part: 'tail' },
    south: { type: 'blue', part: 'tail' },
    west: { type: 'green', part: 'head' },
}));
exports.cardsQueue.addCard(new Card_1.default(6, {
    north: { type: 'blue', part: 'tail' },
    east: { type: 'pink', part: 'head' },
    south: { type: 'green', part: 'tail' },
    west: { type: 'pink', part: 'head' },
}));
exports.cardsQueue.addCard(new Card_1.default(7, {
    north: { type: 'purple', part: 'tail' },
    east: { type: 'pink', part: 'head' },
    south: { type: 'blue', part: 'head' },
    west: { type: 'blue', part: 'head' },
}));
exports.cardsQueue.addCard(new Card_1.default(8, {
    north: { type: 'blue', part: 'head' },
    east: { type: 'purple', part: 'head' },
    south: { type: 'green', part: 'tail' },
    west: { type: 'pink', part: 'tail' },
}));
exports.cardsQueue.addCard(new Card_1.default(9, {
    north: { type: 'green', part: 'head' },
    east: { type: 'blue', part: 'head' },
    south: { type: 'green', part: 'tail' },
    west: { type: 'purple', part: 'tail' },
}));
//# sourceMappingURL=initGame.js.map