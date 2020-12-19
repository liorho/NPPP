import { cardsQueue } from './loadCardQueue';
import { Board } from './Board';

let b = new Board();
// cardsQueue.console()
console.log(cardsQueue.queue[0])
cardsQueue.queue[0].rotateRight()
console.log(cardsQueue.queue[0])

// cardsQueue.queue.forEach(c=> console.log(c))
