"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initGame_1 = require("./modules/initGame");
var Game_1 = require("./modules/Game");
var game = new Game_1.default();
function solvePuzzle() {
    var isGameSolved = game.runGame();
    if (isGameSolved) {
        initGame_1.board.consoleBoard();
    }
}
solvePuzzle();
//# sourceMappingURL=main.js.map