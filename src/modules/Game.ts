import { BOARD_SIZE, CARD_POS } from './../utils/consts';
import { Coordinate } from './../utils/types';
import Board from './Board';
import Card from './Card';
import { cardsQueue, board } from './initGame';

export default class Game {
  placeCardOnBoard(square: Coordinate, card: number, pos: number) {
    board.placeCard(square, cardsQueue.getCard());
  }

  isGameOver(): boolean {
    // check if everything match
    if (board.isAllMatch()) {
      return board.isBoardFull() ? true : false;
    }
    return false;
  }

  runGame(board: Board): any {
    if (board.isBoardFull()) {
      if (board.isAllMatch()) {
        return board;
      } else {
        return false;
      }
    } else {
      for (let y = 0; y < BOARD_SIZE; y++) {
        for (let x = 0; x < BOARD_SIZE; x++) {
          for (let card_id = 1; card_id <= cardsQueue.getQueueSize(); card_id++) {
            const card: Card = cardsQueue.getCardById(card_id);
            if (!board.isCardOnBoard(card)) {
              for (let pos = 0; pos <= CARD_POS; pos++) {
                const XY: Coordinate = { x, y };
                if (board.isSquareEmpty(XY) || !board.isCardInBoardByPos(XY, card)) {
                  board.placeCard(XY, card);
                  return this.runGame(board);
                }
              }
            }
          }
        }
      }
    }
  }
}
