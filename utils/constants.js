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
} // Fix this.

export const colours = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

export const gameArea = document.querySelector('.game');
export const asteroidTemplate = document.querySelector('#asteroid-template').content;
export const counter = document.querySelector('.counter');
export const endScreen = document.querySelector('.end-screen');
export const restart = endScreen.querySelector('.end-screen__button');
export const stats = endScreen.querySelector('.end-screen__stats');   
export const settingsButton = endScreen.querySelector('.settings__button');
export const settings = document.querySelector('.settings');
export const returnButton = settings.querySelector('.return__button');
export const settingsFormElement = settings.querySelector('.settings__form')
export const settingsRange = settingsFormElement.querySelector('.settings__range');
export const endScreenTitle = endScreen.querySelector('.end-screen__title');
export const buttons = document.querySelectorAll('button');
export const hitSound = new sound('./sounds/blop.mp3');
export const clickSound = new sound('./sounds/click.mp3');
export const loseSound = new sound('./sounds/losing.mp3');
