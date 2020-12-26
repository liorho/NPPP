"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CardsQueue = /** @class */ (function () {
    function CardsQueue() {
        this.queue = [];
        this.lengthAfterGetCard = 0;
        this.lastLength = 0;
        this.roundCounter = 0;
    }
    CardsQueue.prototype.addCard = function (card) {
        // tracking number of rounds which the queue's length haven't changed
        if (this.queue.length === this.lengthAfterGetCard)
            this.roundCounter++;
        card._rotateCount = 0;
        this.queue.push(card);
    };
    CardsQueue.prototype.getCard = function () {
        this.lengthAfterGetCard = this.queue.length - 1;
        return this.queue.splice(0, 1)[0];
    };
    CardsQueue.prototype.isQueueEmpty = function () {
        return !this.queue.length;
    };
    CardsQueue.prototype.console = function () {
        console.log(this.queue);
    };
    CardsQueue.prototype.isRepeat = function () {
        if (this.roundCounter > this.queue.length) {
            this.roundCounter = 0;
            return true;
        }
        else {
            return false;
        }
    };
    return CardsQueue;
}());
exports.default = CardsQueue;
//# sourceMappingURL=CardsQueue.js.map