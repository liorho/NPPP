import { cardsQueue, board } from './modules/initGame';
import Game from './modules/Game';
import Board from './modules/Board';

const game = new Game();

function solvePuzzle(): any {
  const isGameSolved: any = game.runGame(board);
  console.log(isGameSolved)
  if (isGameSolved) {
    board.consoleBoard();
  }
}

solvePuzzle();
