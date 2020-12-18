import Card from "./Card"

export default class CardsQueue {
  queue: Card[]

  constructor() {
    this.queue = []
  }

  addCard(card: Card): void{
    this.queue.unshift(card)
  }

  getCard(): Card {
    return this.queue.splice(0, 1)[0]
  }

  isQueueEmpty(): boolean {
    return !this.queue.length
  }

}