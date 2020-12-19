"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CardsQueue = /** @class */ (function () {
    function CardsQueue() {
        this.queue = [];
    }
    CardsQueue.prototype.addCard = function (card) {
        this.queue.unshift(card);
    };
    CardsQueue.prototype.getCard = function () {
        return this.queue.splice(0, 1)[0];
    };
    CardsQueue.prototype.isQueueEmpty = function () {
        return !this.queue.length;
    };
    CardsQueue.prototype.console = function () {
        console.log(this.queue);
    };
    return CardsQueue;
}());
exports.default = CardsQueue;
//# sourceMappingURL=CardsQueue.js.map