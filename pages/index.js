import { gameArea, entryButton, entryButtonList, entryButtons,
  entryButtonHoverSound, startupSound
 } from "../utils/constants.js";

import Asteroid from "../components/Asteroid.js";

// document.onload = startupSound.play();

document.addEventListener('load', () => {
  console.log(123)
})

const renderAsteroids = setInterval(() => {
  const asteroid = new Asteroid("#asteroid-template");
  const asteroidElement = asteroid.renderAsteroid();
  gameArea.prepend(asteroidElement);
}, 1500);

// const asteroid = new Asteroid("#asteroid-template");
// const asteroidElement = asteroid.renderAsteroid();
// gameArea.prepend(asteroidElement);

entryButton.addEventListener("click", () => {
  entryButtonList.classList.toggle('entry__button-list_opened');
  startupSound.play()
});

entryButtons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    entryButtonHoverSound.play();
  })
})
