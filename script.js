const gameArea = document.querySelector('.game');
const asteroidTemplate = document.querySelector('.asteroid-template').content;
const counter = document.querySelector('.counter');
const endScreen = document.querySelector('.end-screen');
const restart = endScreen.querySelector('.end-screen__button');
const stats = endScreen.querySelector('.end-screen__stats');   
let destroyedNum = 0;
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

restart.addEventListener('click', () => {
    destroyedNum = 0;
    gameArea.innerHTML = '';
    counter.textContent = `Destroyed : ${destroyedNum}`;
    endScreen.classList.remove('screen_opened');
})

function renderAsteroid () {
    const asteroidElement = asteroidTemplate.cloneNode(true);
    const asteroid = asteroidElement.querySelector('.asteroid');

    asteroid.style.top = `${getRandomInt(89)}vh`;
    asteroid.style.left = `${getRandomInt(89)}vw`;

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
    })
    gameArea.prepend(asteroidElement);
}

const renderAsteroids = setInterval(renderAsteroid, 1000); 
// const deleteAsteroids = setInterval(() => {
//     gameArea.innerHTML = '';
// }, 1100)