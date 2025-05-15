"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickRandom = pickRandom;
function pickRandom(list) {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
}
