import { BOARD_SIZE } from '../utils/consts';
import { BOARD } from '../utils/types';
import Card from './Card';

export default class Board {
  board: BOARD;
  
  constructor() {
    this.board = [new Array<Card>(), new Array<Card>(), new Array<Card>()];
  }

  private loopBoard(func: (x: number, y: number) => any) {
    for (let y = 0; y < BOARD_SIZE; y++) {
      for (let x = 0; x < BOARD_SIZE; x++) {
        if (func(x, y)) return;
      }
    }
  }

  initBoard() {
    this.loopBoard((x: number, y: number) => {
      this.board[y][x] = undefined;
    });
  }

  placeCard(card: Card) {
    this.loopBoard((x: number, y: number) => {
      if (!this.board[y][x]) {
        return (this.board[y][x] = card);
      }
    });
  }

  consoleBoard(x?: number, y?: number) {
    if (x && y) return console.log(this.board[y][x]);
    console.log(this.board);
  }

}
