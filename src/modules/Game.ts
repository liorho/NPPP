import { cardsQueue, board } from './initGame';

export default class Game {
  placeCardOnBoard() {
    board.placeCard(cardsQueue.getCard());
  }

  isGameOver(): boolean {
    // check if everything match
    if (board.isAllMatch()) {
      return board.isBoardFull() ? true : false;
    }
    return false;
  }

  runGame(): any {
    // if (this.isGameOver()) {
    //   return true;
    // }
    if (board.isAllMatch()) {
      if (board.isBoardFull()) {
        return true;
      } else {
        this.placeCardOnBoard();
        return this.runGame();
      }
    } else {
      if (board.isLastCardWasFullyRotated()) {
        //            yes - return it to queue

        board.returnCardToQueue();
        if (cardsQueue.isRepeat()) {
          board.returnCardToQueue()
        }
        this.placeCardOnBoard();
        return this.runGame();
      } else {
        //            no - rotate the card O(then check again)
        board.rotateLastCard();
        return this.runGame();
      }
    }
  }
}
