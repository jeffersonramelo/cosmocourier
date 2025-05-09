import { Planet } from "./Planet";
import { Cargo } from "./Cargo";

export class Ship {
    name: string;
    fuel: number;
    capacity: number;

    constructor(name: string, fuel: number, capacity: number) {
        this.name = name;
        this.fuel = fuel;
        this.capacity = capacity;
    }

    canDeliver(planet: Planet, cargo: Cargo): boolean {
        return this.fuel >= planet.distance && this.capacity >= cargo.weight;
    }

    deliver(planet: Planet, cargo: Cargo): void {
        if (this.canDeliver(planet, cargo)) {
            console.log(`${this.name} delivered ${cargo.type} to planet ${planet.name}`);
            this.fuel -= planet.distance;
            this.capacity -= cargo.weight;
        } else {
            console.log(`${this.name} FAILED to deliver ${cargo.type} to planet ${planet.name}`);
        }
    }
}
