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

cosmocourier/
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
    node dist/main.js

If you prefer using ts-node:
    ts-node main.ts

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

Autors:

JEFFERSON RICARDO DO AMARAL MELO
GEOVANNA ARAUJO DE SOUSA

State University of Piaui

