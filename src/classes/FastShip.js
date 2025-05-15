"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastShip = void 0;
const Ship_1 = require("./Ship");
class FastShip extends Ship_1.Ship {
    canDeliver(planet, cargo) {
        return this.fuel >= planet.distance * 0.8 && this.capacity >= cargo.weight;
    }
}
exports.FastShip = FastShip;
