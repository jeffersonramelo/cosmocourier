"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArmoredShip = void 0;
const Ship_1 = require("./Ship");
class ArmoredShip extends Ship_1.Ship {
    canDeliver(planet, cargo) {
        return this.fuel >= planet.distance * 1.2 && this.capacity >= cargo.weight + 50;
    }
}
exports.ArmoredShip = ArmoredShip;
