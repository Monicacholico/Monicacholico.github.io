const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

const songs = ['desert', 'electronica', 'sunshine'];

// Keep track of songs

let songIndex = 1;

// initially load songs into DOM

loadSong(songs[songIndex]);

// Update song details

function loadSong(song) {
    title.innerText = song;
    audio.src = `./assets/music/${song}.mp3`;
    cover.src = `./assets/images/${song}.png`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

function prevSong() {
    songIndex--
    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);

    playSong();

}

function nextSong() {
    songIndex++;
    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);

    playSong();

}

function updateProgress(e) {
    console.log(e.srcElement.currentTime);
    const {duration, currentTime} = e.srcElement;
    console.log({duration});
    console.log({currentTime});
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}px`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    console.log(clickX);
    const duration = audio.duration;
    audio.currentTime = clickX / width * duration;
}

// Event Listeners

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }

});

// change song events

prevBtn.addEventListener('click', prevSong) 

nextBtn.addEventListener('click', nextSong) 

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);



