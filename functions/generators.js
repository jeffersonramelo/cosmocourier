"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomPlanet = generateRandomPlanet;
exports.generateRandomCargo = generateRandomCargo;
exports.generateRandomShip = generateRandomShip;
var Planet_1 = require("../classes/Planet");
var Cargo_1 = require("../classes/Cargo");
var Ship_1 = require("../classes/Ship");
var FastShip_1 = require("../classes/FastShip");
var ArmoredShip_1 = require("../classes/ArmoredShip");
var randomUtil_1 = require("./randomUtil");
function generateRandomPlanet() {
    var names = ["Mars", "Jupiter", "Saturn", "Neptune", "Venus"];
    var name = (0, randomUtil_1.pickRandom)(names);
    var distance = Math.floor(Math.random() * 201) + 50;
    return new Planet_1.Planet(name, distance);
}
function generateRandomCargo() {
    var types = ["Water", "Rocks", "Food", "Oxygen", "Tools"];
    var type = (0, randomUtil_1.pickRandom)(types);
    var weight = Math.floor(Math.random() * 301) + 100;
    return new Cargo_1.Cargo(type, weight);
}
function generateRandomShip(name) {
    var type = (0, randomUtil_1.pickRandom)(["normal", "fast", "armored"]);
    var fuel = Math.floor(Math.random() * 201) + 100;
    var capacity = Math.floor(Math.random() * 301) + 200;
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
