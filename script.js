const gameArea = document.querySelector('.game');
const asteroidTemplate = document.querySelector('.asteroid-template').content;

function renderAsteroid () {
    const asteroidElement = asteroidTemplate.cloneNode(true);
    const asteroid = asteroidElement.querySelector('.asteroid');
    asteroid.addEventListener('click', () => {
        asteroid.remove();
    })
    gameArea.prepend(asteroidElement);
}

renderAsteroid();