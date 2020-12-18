"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardsQueue = void 0;
var CardsQueue_js_1 = require("./CardsQueue.js");
var Card_1 = require("./Card");
exports.cardsQueue = new CardsQueue_js_1.default();
exports.cardsQueue.addCard(new Card_1.default(1, {
    north: { color: 'blue', part: 'head' },
    east: { color: 'pink', part: 'tail' },
    south: { color: 'blue', part: 'tail' },
    west: { color: 'purple', part: 'head' },
}));
//# sourceMappingURL=createCardQueue.js.map