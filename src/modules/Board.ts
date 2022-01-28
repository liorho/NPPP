import { Coordinate } from './../utils/types';
import { BOARD } from '../utils/types';
import { BOARD_SIZE } from './../utils/consts';
import { cardsQueue, board } from './initGame';

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

  placeCard({ x, y }: Coordinate, card: Card): void {
    this.board[y][x] = card;
  }

  isSquareEmpty({ x, y }: Coordinate): boolean {
    return !this.board[y][x];
  }

  isCard(c: any): c is Card {
    return c ? 'id' in c : false;
  }
  isCardOnBoard(card: Card): boolean {
    return this.board.some((cardRow) =>
      cardRow.some((c) => {
        if (this.isCard(c)) {
          return c.id === card.id;
        } else {
          return false;
        }
      })
    );

    // return this.board.some(c => {
    //   if (this.isCard(c)) {
    //     return c.id === card.id
    //   }
    // })
  }

  isCardInBoardByPos({ x, y }: Coordinate, card: Card): boolean {
    return this.board[y][x]?.id === card.id || this.board[y][x]?.pos === card.pos;
  }

  consoleBoard(x?: number, y?: number) {
    if (x && y) {
      return console.log(this.board[y][x]);
    } else {
      this.loopBoard((x: number, y: number) => console.log(this.board[y][x]));
    }
  }

  isAllMatch() {
    for (let y = 0; y < BOARD_SIZE; y++) {
      for (let x = 0; x < BOARD_SIZE; x++) {
        if (!this.isMatch(x, y)) {
          return false;
        }
      }
    }
    return true;
  }

  isMatch(x: number, y: number): boolean {
    const theCard: Card | undefined = this.board[y][x];
    const northCard: Card | undefined = y > 0 ? this.board[y - 1][x] : undefined;
    const eastCard: Card | undefined = x < BOARD_SIZE - 1 ? this.board[y][x + 1] : undefined;
    const southCard: Card | undefined = y < BOARD_SIZE - 1 ? this.board[y + 1][x] : undefined;
    const westCard: Card | undefined = x > 0 ? this.board[y][x - 1] : undefined;
    if (theCard) {
      if (northCard) {
        if (theCard.sides.north.part === northCard.sides.south.part || theCard.sides.north.type !== northCard.sides.south.type) return false;
      }
      if (eastCard) {
        if (theCard.sides.east.part === eastCard.sides.west.part || theCard.sides.east.type !== eastCard.sides.west.type) return false;
      }
      if (southCard) {
        if (theCard.sides.south.part === southCard.sides.north.part || theCard.sides.south.type !== southCard.sides.north.type) return false;
      }
      if (westCard) {
        if (theCard.sides.west.part === westCard.sides.east.part || theCard.sides.west.type !== westCard.sides.east.type) return false;
      }
    }
    return true;
  }

  isBoardFull(): boolean {
    for (let y = 0; y < BOARD_SIZE; y++) {
      for (let x = 0; x < BOARD_SIZE; x++) {
        if (!this.board[y][x]) return false;
      }
    }
    return true;
  }

  getLastCardCoor(): Coordinate {
    for (let y = 0; y < BOARD_SIZE; y++) {
      for (let x = 0; x < BOARD_SIZE; x++) {
        if (!this.board[y][x]) {
          return x === 0 ? { x: 2, y: y - 1 } : { x: x - 1, y: y };
        }
      }
    }
    return { x: 2, y: 2 };
  }

  isLastCardWasFullyRotated(): boolean {
    const { x, y } = this.getLastCardCoor();
    const lastCard: Card | undefined = this.board[y][x];
    if (lastCard) {
      if (lastCard.isFullyRotated()) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  returnCardToQueue(): void {
    const { x, y } = this.getLastCardCoor();
    cardsQueue.addCard(this.board[y][x]!);
    this.board[y][x] = undefined;
  }

  rotateLastCard(): void {
    const { x, y } = this.getLastCardCoor();
    const lastCard: Card | undefined = this.board[y][x];
    lastCard?.rotateRight();
  }
}
