import { Ship } from "./Ship";
import { Planet } from "./Planet";
import { Cargo } from "./Cargo";

export class FastShip extends Ship {
    canDeliver(planet: Planet, cargo: Cargo): boolean {
        return this.fuel >= planet.distance * 0.8 && this.capacity >= cargo.weight;
    }
}
