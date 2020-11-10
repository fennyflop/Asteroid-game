let comboCounter = 0;

export default class Asteroid {
  constructor(selector, missSound) {
    this._selector = selector;
    this._handleButtonClicks = this._handleButtonClicks.bind(this);
    this._animationTime = 0;
  }

  _getTemplate() {
    const asteroidElement = document
      .querySelector(this._selector)
      .content.cloneNode(true);
    return asteroidElement;
  }

  renderAsteroid() {
    this._asteroidElement = this._getTemplate();
    this._asteroid = this._asteroidElement.querySelector(".asteroid");
    this._asteroidCircle = this._asteroidElement.querySelector(
      ".asteroid__element"
    );
    this._asteroidIndicator = this._asteroidElement.querySelector(
      ".asteroid__indicator"
    );
    this._asteroidMiss = this._asteroidElement.querySelector(".asteroid__miss");
    this._setEventListeners();
    this._getAsteroidPlace();

    return this._asteroid;
  }

  _setEventListeners() {
    // Adding a clicking listener.

    this._asteroidCircle.addEventListener("click", () => {
      this._removeAsteroid();
      this._increaseCombo();
    });

    // Adding a button listener.

    this._asteroidCircle.addEventListener("mouseenter", () => {
      document.addEventListener("keydown", this._handleButtonClicks);
    });

    this._handleRescale();
  }

  _handleButtonClicks(evt) {
    if (evt.key === "z" || evt.key === "x") {
      this._removeAsteroid();
      this._increaseCombo();
      this._removeHandleButtonClicks();
    }
  }

  _handleRescale() {
    this._asteroidIndicator.addEventListener("animationend", () => {
      this._handleMiss();
      this._nulifyCombo();
      this._removeHandleButtonClicks();
    });
  }

  _removeAsteroid() {
    this._asteroid.remove();
  }

  _handleMiss() {
    this._asteroid.style.visibility = "hidden";
    this._asteroidIndicator.style.visibility = "hidden";
    this._asteroidMiss.style.visibility = "visible";
    setTimeout(() => {
      this._removeAsteroid();
    }, 700);
  }

  _getAsteroidPlace() {
    this._asteroid.style.top = `${this._getRandomInt(89)}vh`;
    this._asteroid.style.left = `${this._getRandomInt(89)}vw`;
  }

  _getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  _removeHandleButtonClicks() {
    document.removeEventListener("keydown", this._handleButtonClicks);
  }

  _increaseCombo() {
    comboCounter += 1;
    this._updateComboCounter();
  }

  _nulifyCombo() {
    comboCounter = 0;
    this._updateComboCounter();
  }

  _updateComboCounter() {
    document.querySelector(".game__combo").textContent = `${comboCounter}x`;
  }
}
