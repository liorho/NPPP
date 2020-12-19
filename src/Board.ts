import { BOARD } from './types';
import Card from './Card';

export class Board {
  board: BOARD;
  constructor() {
    this.board = [new Array<Card>(3), new Array<Card>(3), new Array<Card>(3)];
  }

  placeCard(card: Card, x: number, y: number) {
    this.board[y][x] = card
  }

  console(x?: number, y?: number) {
    if (x && y) return console.log(this.board[y][x])
    console.log(this.board)
  }
}
