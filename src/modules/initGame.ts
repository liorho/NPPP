import CardsQueue from './CardsQueue.js';
import Card from './Card';
import Board from './Board';

// INIT BOARD
export const board = new Board()
board.initBoard()

// INIT CARDS QUEUE
export const cardsQueue = new CardsQueue();

cardsQueue.addCard(
  new Card(1, {
    north: { type: 'blue', part: 'head' },
    east: { type: 'pink', part: 'tail' },
    south: { type: 'blue', part: 'tail' },
    west: { type: 'purple', part: 'head' },
  })
);

cardsQueue.addCard(
  new Card(2, {
    north: { type: 'pink', part: 'head' },
    east: { type: 'green', part: 'head' },
    south: { type: 'purple', part: 'head' },
    west: { type: 'blue', part: 'tail' },
  })
);

cardsQueue.addCard(
  new Card(3, {
    north: { type: 'purple', part: 'tail' },
    east: { type: 'pink', part: 'tail' },
    south: { type: 'purple', part: 'tail' },
    west: { type: 'green', part: 'head' },
  })
);
cardsQueue.addCard(
  new Card(4, {
    north: { type: 'purple', part: 'tail' },
    east: { type: 'green', part: 'tail' },
    south: { type: 'purple', part: 'head' },
    west: { type: 'green', part: 'tail' },
  })
);
cardsQueue.addCard(
  new Card(5, {
    north: { type: 'pink', part: 'head' },
    east: { type: 'pink', part: 'tail' },
    south: { type: 'blue', part: 'tail' },
    west: { type: 'green', part: 'head' },
  })
);

cardsQueue.addCard(
  new Card(6, {
    north: { type: 'blue', part: 'tail' },
    east: { type: 'pink', part: 'head' },
    south: { type: 'green', part: 'tail' },
    west: { type: 'pink', part: 'head' },
  })
);

cardsQueue.addCard(
  new Card(7, {
    north: { type: 'purple', part: 'tail' },
    east: { type: 'pink', part: 'head' },
    south: { type: 'blue', part: 'head' },
    west: { type: 'blue', part: 'head' },
  })
);

cardsQueue.addCard(
  new Card(8, {
    north: { type: 'blue', part: 'head' },
    east: { type: 'purple', part: 'head' },
    south: { type: 'green', part: 'tail' },
    west: { type: 'pink', part: 'tail' },
  })
);

cardsQueue.addCard(
  new Card(9, {
    north: { type: 'green', part: 'head' },
    east: { type: 'blue', part: 'head' },
    south: { type: 'green', part: 'tail' },
    west: { type: 'purple', part: 'tail' },
  })
);