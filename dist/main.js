"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initGame_1 = require("./modules/initGame");
var Game_1 = require("./modules/Game");
var game = new Game_1.default();
var count = 0;
function solvePuzzle() {
    game.placeCardOnBoard();
    game.placeCardOnBoard();
    if (game.isGameOver(count)) {
        return initGame_1.board.consoleBoard();
    }
    else {
        count++;
        solvePuzzle();
    }
}
solvePuzzle();
//# sourceMappingURL=main.js.map