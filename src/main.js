"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generators_1 = require("./functions/generators");
function main() {
    const planet1 = (0, generators_1.generateRandomPlanet)();
    const planet2 = (0, generators_1.generateRandomPlanet)();
    const cargo1 = (0, generators_1.generateRandomCargo)();
    const cargo2 = (0, generators_1.generateRandomCargo)();
    const ship1 = (0, generators_1.generateRandomShip)("X-Describe");
    const ship2 = (0, generators_1.generateRandomShip)("VFC");
    ship1.deliver(planet1, cargo1);
    ship1.deliver(planet2, cargo2);
    ship2.deliver(planet1, cargo2);
    ship2.deliver(planet2, cargo1);
}
main();
