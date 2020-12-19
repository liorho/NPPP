import { cardsQueue, board } from './modules/initGame';
import Game from './modules/Game';

const game = new Game();

function solvePuzzle() {
  game.placeCardOnBoard();
  game.placeCardOnBoard();
  if (game.isGameOver()) {
    return board.consoleBoard();
  } else {
    solvePuzzle();
  }
}

solvePuzzle();
