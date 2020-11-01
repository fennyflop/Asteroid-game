import {
    gameArea, asteroidTemplate, counter, endScreen,
    restart, stats, settingsButton, settings,
    returnButton, settingsFormElement, settingsRange,
    endScreenTitle, buttons, hitSound, clickSound, loseSound,
    colours,
} from '../utils/constants.js';

import Asteroid from '../components/Asteroid.js';

const renderAsteroids = setInterval(() => {
    const asteroid = new Asteroid ('#asteroid-template');
    const asteroidElement = asteroid.renderAsteroid();
    gameArea.prepend(asteroidElement);
}, 1500);

// const asteroid = new Asteroid ('#asteroid-template');
// const asteroidElement = asteroid.renderAsteroid();
// gameArea.prepend(asteroidElement);

function showDestroyedNum () {
    counter.innerHTML = `Destroyed : ${destroyedNum} | <a class="copyright" href="https://github.com/fennyflop">fennyflop</a>`
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        clickSound.play();
    })
})


settingsButton.addEventListener('click', () => {
    settings.classList.add('screen_opened');
})

returnButton.addEventListener('click', () => {
    settings.classList.remove('screen_opened');
    lifeSpan = currentLifespan;
})

restart.addEventListener('click', () => {
    destroyedNum = 0;
    gameArea.innerHTML = '';
    counter.innerHTML = `Destroyed : ${destroyedNum} | <a class="copyright" href="https://github.com/fennyflop">fennyflop</a>`;
    endScreen.classList.remove('screen_opened');
    lifeSpan = currentLifespan;
})

function submitSettings (evt) {
    evt.preventDefault();
    currentLifespan = settingsRange.value;
    settings.classList.remove('screen_opened');

}

settingsFormElement.addEventListener('submit', submitSettings)