import { Planet } from "../classes/Planet";
import { Cargo } from "../classes/Cargo";
import { Ship } from "../classes/Ship";
import { FastShip } from "../classes/FastShip";
import { ArmoredShip } from "../classes/ArmoredShip";
import { pickRandom } from "./randomUtil";

export function generateRandomPlanet(): Planet {
    const names = ["Mars", "Jupiter", "Saturn", "Neptune", "Venus"];
    const name = pickRandom(names);
    const distance = Math.floor(Math.random() * 201) + 50;
    return new Planet(name, distance);
}

export function generateRandomCargo(): Cargo {
    const types = ["Water", "Rocks", "Food", "Oxygen", "Tools"];
    const type = pickRandom(types);
    const weight = Math.floor(Math.random() * 301) + 100;
    return new Cargo(type, weight);
}

export function generateRandomShip(name: string): Ship {
    const type = pickRandom(["normal", "fast", "armored"]);
    const fuel = Math.floor(Math.random() * 201) + 100;
    const capacity = Math.floor(Math.random() * 301) + 200;

    if (type === "fast") {
        return new FastShip(name, fuel, capacity);
    } else if (type === "armored") {
        return new ArmoredShip(name, fuel, capacity);
    } else {
        return new Ship(name, fuel, capacity);
    }
}
