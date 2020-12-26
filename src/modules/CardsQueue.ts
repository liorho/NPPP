import Card from './Card';

export default class CardsQueue {
  queue: Card[];
  lastLength: number;
  roundCounter: number;
  lengthAfterGetCard: number;

  constructor() {
    this.queue = [];
    this.lengthAfterGetCard = 0;
    this.lastLength = 0;
    this.roundCounter = 0;
  }

  addCard(card: Card): void {
    // tracking number of rounds which the queue's length haven't changed
    if (this.queue.length === this.lengthAfterGetCard) this.roundCounter++;
    card._rotateCount = 0;
    this.queue.push(card);
  }

  getCard(): Card {
    this.lengthAfterGetCard = this.queue.length - 1;
    return this.queue.splice(0, 1)[0];
  }

  isQueueEmpty(): boolean {
    return !this.queue.length;
  }

  console(): void {
    console.log(this.queue);
  }

  isRepeat(): boolean {
    if (this.roundCounter > this.queue.length) {
      this.roundCounter = 0
      return true
    } else {

      return false;
    }
  }
}
