const progress = document.querySelector('.player__progress');
const counter = document.querySelector('.player__counter');

let duration = 0;

export default class AudioPlayer {
    constructor (selector, {url, length, info}) {
        this._element = document.querySelector(selector);
        this._url = url;
        this._length = length;
        this._author = info.author;
        this._title = info.title;
        this._audio = new Audio(url);
    }
    _play() {
        this._audio.play();
        this._duration = setInterval(() => {
            this._updateTime();
        }, 1000);
    }
    _pause() {
        this._audio.pause();
        clearInterval(this._duration);
    }
    _updateTime () {
        this._setProgress();
        duration += 1;
    }
    _setProgress () {
        progress.style.width = `${duration / this._length * 100}%`;
    }
    setEventListeners () {
        this._element.querySelector('.player__play').addEventListener('click', () => {
            this._play();
        });
        this._element.querySelector('.player__pause').addEventListener('click', () => {
            this._pause();
        });
        this._element.querySelector('.player__counter').textContent = `${Math.floor(this._length / 60)} : ${this._getSeconds(this._length % 60)}`;
        this._element.querySelector('.player__title').textContent = `${this._author} - ${this._title}`;
    }
    _getSeconds (seconds) {
        if (seconds < 10) {
            return '0' + seconds;
        };
        return seconds;
    }
}