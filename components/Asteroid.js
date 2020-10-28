const gameArea = document.querySelector('.game');

export default class Asteroid {
    constructor (selector) {
        this._selector = selector;
    }
    _getTemplate () {
        const asteroidElement = document
        .querySelector(this._selector)
        .content
        .cloneNode(true);
        return asteroidElement;
    }
    renderAsteroid () {
        this._asteroidElement = this._getTemplate();
        this._asteroid = this._asteroidElement.querySelector('.game__asteroid');
        this._setEventListeners();
        this._getAsteroidPlace();
        return this._asteroid;
    }
    _setEventListeners () {
        this._asteroid.addEventListener('click', () => {
            this._removeAsteroid();
        })
    }
    _removeAsteroid () {
        this._asteroid.remove();
    }
    _getRandomInt (max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    _getAsteroidPlace () {  
        this._asteroid.style.top = `${this._getRandomInt(89)}vh`;
        this._asteroid.style.left = `${this._getRandomInt(89)}vw`;
    }
}



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