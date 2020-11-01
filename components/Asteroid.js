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
        // Adding a clicking listener.

        this._asteroid.addEventListener('click', () => {
            this._removeAsteroid();
            comboCounter += 1;
            this._updateComboCounter();
        });

        // Adding a button listener.
        this._asteroid.addEventListener('mouseenter', () => {
            document.addEventListener('keydown', this._handleButtonClicks);
        });

        // Handling the lose option
        this._handleRescale();
    }
    _handleButtonClicks (evt) {
        if(evt.key === 'z' || evt.key === 'x') {
            this._removeAsteroid();
            document.removeEventListener('keydown', this._handleButtonClicks);
            comboCounter += 1;
            this._updateComboCounter();
        }
    }
    _handleRescale () {
        this._asteroid.addEventListener('animationend', () => {
            this._handleMiss();
        })
    }
    _removeAsteroid() {
        this._asteroid.remove();
    }
    _handleMiss () {
        this._asteroidText = this._asteroid.querySelector('.game__asteroid-text');
        this._asteroidText.textContent = 'L';
        this._asteroid.classList.add('game__asteroid-miss');
        this._asteroid.style.opacity = 0; 
        this._asteroid.addEventListener('animationend', () => {
            comboCounter = 0;
            this._updateComboCounter();
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
    _updateComboCounter(){
        this._gameComboCounter.textContent = `${comboCounter}x`;
    }
}