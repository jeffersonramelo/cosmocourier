"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomPlanet = generateRandomPlanet;
exports.generateRandomCargo = generateRandomCargo;
exports.generateRandomShip = generateRandomShip;
const Planet_1 = require("../classes/Planet");
const Cargo_1 = require("../classes/Cargo");
const Ship_1 = require("../classes/Ship");
const FastShip_1 = require("../classes/FastShip");
const ArmoredShip_1 = require("../classes/ArmoredShip");
const randomUtil_1 = require("./randomUtil");
function generateRandomPlanet() {
    const names = ["Mars", "Jupiter", "Saturn", "Neptune", "Venus"];
    const name = (0, randomUtil_1.pickRandom)(names);
    const distance = Math.floor(Math.random() * 201) + 50;
    return new Planet_1.Planet(name, distance);
}
function generateRandomCargo() {
    const types = ["Water", "Rocks", "Food", "Oxygen", "Tools"];
    const type = (0, randomUtil_1.pickRandom)(types);
    const weight = Math.floor(Math.random() * 301) + 100;
    return new Cargo_1.Cargo(type, weight);
}
function generateRandomShip(name) {
    const type = (0, randomUtil_1.pickRandom)(["normal", "fast", "armored"]);
    const fuel = Math.floor(Math.random() * 201) + 100;
    const capacity = Math.floor(Math.random() * 301) + 200;
    if (type === "fast") {
        return new FastShip_1.FastShip(name, fuel, capacity);
    }
    else if (type === "armored") {
        return new ArmoredShip_1.ArmoredShip(name, fuel, capacity);
    }
    else {
        return new Ship_1.Ship(name, fuel, capacity);
    }
}
