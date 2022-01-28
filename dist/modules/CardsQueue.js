"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CardsQueue {
    constructor() {
        this.queue = [];
        this.lengthAfterGetCard = 0;
        this.lastLength = 0;
        this.roundCounter = 0;
    }
    addCard(card) {
        // tracking number of rounds which the queue's length haven't changed
        if (this.queue.length === this.lengthAfterGetCard)
            this.roundCounter++;
        card._rotateCount = 0;
        this.queue.push(card);
    }
    getQueueSize() {
        return this.queue.length;
    }
    getCard() {
        this.lengthAfterGetCard = this.queue.length - 1;
        return this.queue.splice(0, 1)[0];
    }
    getCardById(id) {
        return this.queue.find(c => c.id === id);
    }
    isQueueEmpty() {
        return !this.queue.length;
    }
    console() {
        console.log(this.queue);
    }
    isRepeat() {
        if (this.roundCounter > this.queue.length) {
            this.roundCounter = 0;
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = CardsQueue;
//# sourceMappingURL=CardsQueue.js.map