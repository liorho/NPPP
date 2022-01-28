"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initGame_1 = require("./modules/initGame");
const Game_1 = require("./modules/Game");
const game = new Game_1.default();
function solvePuzzle() {
    const isGameSolved = game.runGame(initGame_1.board);
    console.log(isGameSolved);
    if (isGameSolved) {
        initGame_1.board.consoleBoard();
    }
}
solvePuzzle();
//# sourceMappingURL=main.js.map