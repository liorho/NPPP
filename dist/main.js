"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loadCardQueue_1 = require("./loadCardQueue");
var Board_1 = require("./Board");
var b = new Board_1.Board();
// cardsQueue.console()
console.log(loadCardQueue_1.cardsQueue.queue[0]);
loadCardQueue_1.cardsQueue.queue[0].rotateRight();
console.log(loadCardQueue_1.cardsQueue.queue[0]);
// cardsQueue.queue.forEach(c=> console.log(c))
//# sourceMappingURL=main.js.map