"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./../utils/consts");
const initGame_1 = require("./initGame");
class Game {
    placeCardOnBoard(square, card, pos) {
        initGame_1.board.placeCard(square, initGame_1.cardsQueue.getCard());
    }
    isGameOver() {
        // check if everything match
        if (initGame_1.board.isAllMatch()) {
            return initGame_1.board.isBoardFull() ? true : false;
        }
        return false;
    }
    runGame(board) {
        if (board.isBoardFull()) {
            if (board.isAllMatch()) {
                return board;
            }
            else {
                return false;
            }
        }
        else {
            for (let y = 0; y < consts_1.BOARD_SIZE; y++) {
                for (let x = 0; x < consts_1.BOARD_SIZE; x++) {
                    for (let card_id = 1; card_id <= initGame_1.cardsQueue.getQueueSize(); card_id++) {
                        const card = initGame_1.cardsQueue.getCardById(card_id);
                        if (!board.isCardOnBoard(card)) {
                            for (let pos = 0; pos <= consts_1.CARD_POS; pos++) {
                                const XY = { x, y };
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
exports.default = Game;
//# sourceMappingURL=Game.js.map