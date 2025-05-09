"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ship = void 0;
var Ship = /** @class */ (function () {
    function Ship(name, fuel, capacity) {
        this.name = name;
        this.fuel = fuel;
        this.capacity = capacity;
    }
    Ship.prototype.canDeliver = function (planet, cargo) {
        return this.fuel >= planet.distance && this.capacity >= cargo.weight;
    };
    Ship.prototype.deliver = function (planet, cargo) {
        if (this.canDeliver(planet, cargo)) {
            console.log("".concat(this.name, " delivered ").concat(cargo.type, " to planet ").concat(planet.name));
            this.fuel -= planet.distance;
            this.capacity -= cargo.weight;
        }
        else {
            console.log("".concat(this.name, " FAILED to deliver ").concat(cargo.type, " to planet ").concat(planet.name));
        }
    };
    return Ship;
}());
exports.Ship = Ship;
