import CardsQueue from './CardsQueue.js';
import Card from './Card';

export const cardsQueue = new CardsQueue();

cardsQueue.addCard(
  new Card(1, {
    north: { color: 'blue', part: 'head' },
    east: { color: 'pink', part: 'tail' },
    south: { color: 'blue', part: 'tail' },
    west: { color: 'purple', part: 'head' },
  })
);
