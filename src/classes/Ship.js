"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ship = void 0;
class Ship {
    constructor(name, fuel, capacity) {
        this.name = name;
        this.fuel = fuel;
        this.capacity = capacity;
    }
    canDeliver(planet, cargo) {
        return this.fuel >= planet.distance && this.capacity >= cargo.weight;
    }
    deliver(planet, cargo) {
        if (this.canDeliver(planet, cargo)) {
            console.log(`${this.name} delivered ${cargo.type} to planet ${planet.name}`);
            this.fuel -= planet.distance;
            this.capacity -= cargo.weight;
        }
        else {
            console.log(`${this.name} FAILED to deliver ${cargo.type} to planet ${planet.name}`);
        }
    }
}
exports.Ship = Ship;
