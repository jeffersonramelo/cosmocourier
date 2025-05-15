import { Ship } from "./Ship";
import { Planet } from "./Planet";
import { Cargo } from "./Cargo";

export class ArmoredShip extends Ship {
    canDeliver(planet: Planet, cargo: Cargo): boolean {
        return this.fuel >= planet.distance * 1.2 && this.capacity >= cargo.weight + 50;
    }
}
