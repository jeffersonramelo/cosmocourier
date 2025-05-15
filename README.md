# CosmoCourier – Space Delivery Simulation

This is a simple educational project that simulates cargo deliveries to planets using different types of spaceships. The system is written in TypeScript and demonstrates core Object-Oriented Programming (OOP) principles.

---

## OOP Concepts Covered

| Concept           | How it's Applied                                  |
|-------------------|---------------------------------------------------|
| **Abstraction**   | Classes like `Planet`, `Cargo`, and `Ship`        |
| **Encapsulation** | Properties and methods organized in classes       |
| **Inheritance**   | `FastShip` and `ArmoredShip` extend `Ship`        |
| **Polymorphism**  | `canDeliver()` is overridden in child classes     |
| **Interaction**   | Ships use `Planet` and `Cargo` objects            |
| **State Control** | Fuel and capacity change after deliveries         |
| **Randomness**    | Random generation of planets, ships, and cargo    |

---

## Project Structure

src/
├── classes/
│ ├── Planet.ts
│ ├── Cargo.ts
│ ├── Ship.ts
│ ├── FastShip.ts
│ └── ArmoredShip.ts
├── functions/
│ ├── generators.ts
│ └── randomUtil.ts
├── main.ts
├── README.md
└── tsconfig.json (optional)

Run the program with Node.js
    node src/main.js



How It Works

Each run of the program will:

    Generate 2 random planets

    Generate 2 random cargos

    Generate 2 random ships (normal, fast, or armored)

    Attempt 4 deliveries and print the result

Example output:

X-Describe delivered Oxygen to planet Saturn
X-Describe FAILED to deliver Water to planet Mars
VFC delivered Food to planet Neptune
VFC delivered Tools to planet Venus

Technologies

    TypeScript

    Node.js

    Object-Oriented Programming

## UML Class Diagram

This project includes a class diagram in [diagram.puml](./diagram.puml).  
It represents the relationships between Planet, Cargo, Ship, and its subclasses.

You can render it using the [PlantUML extension for VS Code](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml) or any [online PUML renderer](https://www.plantuml.com/plantuml/).


Autors:

JEFFERSON RICARDO DO AMARAL MELO
GEOVANNA ARAUJO DE SOUSA
IVANILDO DOS SANTOS ARAUJO 
ADONIAS PEREIRA DOS SANTOS 

State University of Piaui

