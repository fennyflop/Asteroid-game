import { gameArea, entryButton, entryButtonList, entryButtons,
  entryButtonHoverSound, startupSound, confirmation
 } from "../utils/constants.js";

import Asteroid from "../components/Asteroid.js";
import AudioPlayer from "../components/AudioPlayer.js";

// document.onload = startupSound.play();

const music = new AudioPlayer('.player', 
{
    url:'../music/music.mp3',
    length: '245',
    info: {
        author: 'Jonathan Figoli',
        title: 'HappySad'
    }
}
);

music.setEventListeners();

document.addEventListener('load', () => {
  console.log(123)
})

const renderAsteroids = setInterval(() => {
  // const asteroid = new Asteroid("#asteroid-template");
  // const asteroidElement = asteroid.renderAsteroid();
  // gameArea.prepend(asteroidElement);
}, 1500);

// const asteroid = new Asteroid("#asteroid-template");
// const asteroidElement = asteroid.renderAsteroid();
// gameArea.prepend(asteroidElement);

entryButton.addEventListener("click", () => {
  entryButtonList.classList.toggle('entry__button-list_opened');
});

entryButtons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    entryButtonHoverSound.play();
  })
})

confirmation.addEventListener('click', () => {
  startupSound.play();
  confirmation.classList.remove('confirmation_opened');
  setTimeout(() => {
    music.play();
  }, 2000)
})

