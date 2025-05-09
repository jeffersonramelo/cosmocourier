import { generateRandomPlanet, generateRandomCargo, generateRandomShip } from "./functions/generators";

function main() {
    const planet1 = generateRandomPlanet();
    const planet2 = generateRandomPlanet();

    const cargo1 = generateRandomCargo();
    const cargo2 = generateRandomCargo();

    const ship1 = generateRandomShip("X-Describe");
    const ship2 = generateRandomShip("VFC");

    ship1.deliver(planet1, cargo1);
    ship1.deliver(planet2, cargo2);

    ship2.deliver(planet1, cargo2);
    ship2.deliver(planet2, cargo1);
}

main();
