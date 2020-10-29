let comboCounter = 0;

export default class Asteroid {
    constructor (selector) {
        this._selector = selector;
        this._handleButtonClicks = this._handleButtonClicks.bind(this);
        this._gameComboCounter = document.querySelector('.game__combo');
        
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
            this._increaseComboCounter();
        });
        this._asteroid.addEventListener('mouseenter', () => {
            document.addEventListener('keydown', this._handleButtonClicks);
        });
        this._handleRescale();
    }
    _handleButtonClicks (evt) {
        if(evt.key === 'z' || evt.key === 'x') {
            this._removeAsteroid();
            document.removeEventListener('keydown', this._handleButtonClicks);
            this._increaseComboCounter();
        }
    }
    _handleRescale () {
        this._asteroid.addEventListener('animationend', () => {
            this._handleMiss();
            this._nulifyComboCounter();
        })
    }
    _removeAsteroid() {
        this._asteroid.remove();
    }
    _handleMiss () {
        this._asteroidText = this._asteroid.querySelector('.game__asteroid-text');
        this._asteroidText.textContent = 'X';
        this._asteroid.classList.add('game__asteroid-miss');
        this._asteroid.style.opacity = 0; 

        this._asteroid.addEventListener('animationend', () => {
            this._removeAsteroid();
        })
    }
    _getRandomInt (max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    _getAsteroidPlace () {  
        this._asteroid.style.top = `${this._getRandomInt(89)}vh`;
        this._asteroid.style.left = `${this._getRandomInt(89)}vw`;
    }
    _increaseComboCounter(){
        comboCounter += 1 // If sliders are added, reimprove this
        this._gameComboCounter.textContent = `${comboCounter}x`;
    }
    _nulifyComboCounter() {
        comboCounter = 0;
        this._gameComboCounter.textContent = "0x";
    }
}