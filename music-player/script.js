import AudioPlayer from '/AudioPlayer.js'

const music = new AudioPlayer('.player', 
{
    url:'music.mp3',
    length: '245'
}
);

const playButton = document.querySelector('.player__play');
const pauseButton = document.querySelector('.player__pause');

music.setEventListeners();


// music._setDuration();

