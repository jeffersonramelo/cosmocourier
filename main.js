"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./functions/generators");
function main() {
    var planet1 = (0, generators_1.generateRandomPlanet)();
    var planet2 = (0, generators_1.generateRandomPlanet)();
    var cargo1 = (0, generators_1.generateRandomCargo)();
    var cargo2 = (0, generators_1.generateRandomCargo)();
    var ship1 = (0, generators_1.generateRandomShip)("X-Describe");
    var ship2 = (0, generators_1.generateRandomShip)("VFC");
    ship1.deliver(planet1, cargo1);
    ship1.deliver(planet2, cargo2);
    ship2.deliver(planet1, cargo2);
    ship2.deliver(planet2, cargo1);
}
main();
