import AudioPlayer from '/AudioPlayer.js'

const music = new AudioPlayer('.player', 
{
    url:'music.mp3',
    length: '245',
    info: {
        author: 'Jonathan Figoli',
        title: 'HappySad'
    }
}
);

music.setEventListeners();


// music._setDuration();

