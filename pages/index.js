import {
    gameArea, asteroidTemplate, counter, endScreen,
    restart, stats, settingsButton, settings,
    returnButton, settingsFormElement, settingsRange,
    endScreenTitle, buttons, hitSound, clickSound, loseSound,
    colours,
} from '../utils/constants.js';

import Asteroid from '../components/Asteroid.js';
import getRandomInt from '../components/getRandomInt.js';

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

// function renderAsteroid () {
//     const asteroidElement = asteroidTemplate.cloneNode(true);
//     const asteroid = asteroidElement.querySelector('.game__asteroid');
//     timer += 1;
//     if(timer % 3 == 0 ){
//         lifeSpan -= 0.1;
//     }
//     asteroid.style.top = `${getRandomInt(89)}vh`;
//     asteroid.style.left = `${getRandomInt(89)}vw`;
//     asteroid.style.animation = `scale ${lifeSpan}s forwards`

//     asteroid.style.boxShadow = `0 0 10px ${colours[getRandomInt(51)]}`;
//     asteroid.addEventListener('animationend', () => {
//         asteroid.remove();
//         stats.innerHTML = `Destroyed : ${destroyedNum}`;
//         endScreen.classList.add('screen_opened');
//         // clearInterval(renderAsteroids);
//     })
    
//     asteroid.addEventListener('click', () => {
//         asteroid.remove();
//         destroyedNum += 1;
//         showDestroyedNum(destroyedNum);
//         hitSound.play();
//     })

//     gameArea.prepend(asteroidElement);
// }

function submitSettings (evt) {
    evt.preventDefault();
    currentLifespan = settingsRange.value;
    settings.classList.remove('screen_opened');

}

settingsFormElement.addEventListener('submit', submitSettings)