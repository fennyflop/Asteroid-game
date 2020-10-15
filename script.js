const gameArea = document.querySelector('.game');
const asteroidTemplate = document.querySelector('.asteroid-template').content;
const counter = document.querySelector('.counter');
const endScreen = document.querySelector('.end-screen');
const restart = endScreen.querySelector('.end-screen__button');
const stats = endScreen.querySelector('.end-screen__stats');   
const settingsButton = endScreen.querySelector('.settings__button');
const settings = document.querySelector('.settings');
const returnButton = settings.querySelector('.return__button');
const settingsFormElement = settings.querySelector('.settings__form')
const settingsRange = settingsFormElement.querySelector('.settings__range');
const endScreenTitle = endScreen.querySelector('.end-screen__title');
const buttons = document.querySelectorAll('button');
const hitSound = new sound('./sounds/blop.mp3');
const clickSound = new sound('./sounds/click.mp3');
let currentLifespan = 1.5;
let timer = 0;
let lifeSpan = currentLifespan;
let destroyedNum = 0;
const renderAsteroids = setInterval(() => {
    renderAsteroid();
}, 1000); 
const colours = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

function getRandomInt (max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function showDestroyedNum () {
    counter.innerHTML = `Destroyed : ${destroyedNum} | <a class="copyright" href="https://github.com/fennyflop">fennyflop</a>`
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        clickSound.play();
    })
})

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
}

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
    counter.textContent = `Destroyed : ${destroyedNum}`;
    endScreen.classList.remove('screen_opened');
    lifeSpan = currentLifespan;
})

function renderAsteroid () {
    const asteroidElement = asteroidTemplate.cloneNode(true);
    const asteroid = asteroidElement.querySelector('.asteroid');
    timer += 1;
    if(timer % 3 == 0 ){
        lifeSpan -= 0.1;
    }
    asteroid.style.top = `${getRandomInt(89)}vh`;
    asteroid.style.left = `${getRandomInt(89)}vw`;
    asteroid.style.animation = `scale ${lifeSpan}s forwards`

    asteroid.style.boxShadow = `0 0 10px ${colours[getRandomInt(51)]}`;
    asteroid.addEventListener('animationend', () => {
        asteroid.remove();
        stats.innerHTML = `Destroyed : ${destroyedNum}`;
        endScreen.classList.add('screen_opened');
        // clearInterval(renderAsteroids);
    })
    
    asteroid.addEventListener('click', () => {
        asteroid.remove();
        destroyedNum += 1;
        showDestroyedNum(destroyedNum);
        hitSound.play();
    })
    console.log(lifeSpan);
    gameArea.prepend(asteroidElement);
}

function submitSettings (evt) {
    evt.preventDefault();
    currentLifespan = settingsRange.value;
    settings.classList.remove('screen_opened');

}

settingsFormElement.addEventListener('submit', submitSettings)


// const deleteAsteroids = setInterval(() => {
//     gameArea.innerHTML = '';
// }, 1100)