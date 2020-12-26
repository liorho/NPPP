import { cardsQueue, board } from './modules/initGame';
import Game from './modules/Game';

const game = new Game();

function solvePuzzle(): any {
  const isGameSolved: boolean = game.runGame();

  if (isGameSolved) {
    board.consoleBoard();
  }
}

solvePuzzle();
