import { gameArea, entryButton } from "../utils/constants.js";

import Asteroid from "../components/Asteroid.js";

const renderAsteroids = setInterval(() => {
  const asteroid = new Asteroid("#asteroid-template");
  const asteroidElement = asteroid.renderAsteroid();
  gameArea.prepend(asteroidElement);
}, 1500);

// const asteroid = new Asteroid("#asteroid-template");
// const asteroidElement = asteroid.renderAsteroid();
// gameArea.prepend(asteroidElement);

entryButton.addEventListener("click", () => {});
