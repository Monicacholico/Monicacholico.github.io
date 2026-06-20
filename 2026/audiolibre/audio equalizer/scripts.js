// Named playlists for players that need specific files (any name, any
// extension, any cover). A player picks one with data-playlist="audiolibre".
// To add a track: drop the file in assets/music (and a cover in
// assets/images), then add a line here.
const playlists = {
    audiolibre: [
        {
            title: 'Medea me cantó un corrido — fragmento',
            src: 'https://www.feel-like-dancing.com/tiendadeballet/wp-content/uploads/2026/06/Voice-AI-lector-fragmento.mp3',
            cover: './assets/images/desert.png', // TODO: swap for real cover art
        }
    ],
};

// Set up ONE music player inside the given container.
// Everything is scoped to `container` so multiple players never collide.
function initPlayer(container) {
    const playBtn = container.querySelector('.play');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    const audio = container.querySelector('.audio');
    const progress = container.querySelector('.progress');
    const progressContainer = container.querySelector('.progress-container');
    const title = container.querySelector('.title');
    const cover = container.querySelector('.cover');

    // Build this player's playlist, in priority order:
    // 1. data-playlist="audiolibre" -> a named playlist from the map above
    //    (full control over title/file/cover, any extension).
    // 2. data-songs="desert,electronica" -> tracks built from the folder
    //    convention (name.mp3 + name.png).
    // 3. No attribute -> just use whatever is already in the HTML
    //    (the <audio src>, <img src> and title). Editing the HTML "just works".
    const playlistKey = container.dataset.playlist;
    const dataSongs = container.dataset.songs;
    let playlist;
    if (playlistKey && playlists[playlistKey]) {
        playlist = playlists[playlistKey];
    } else if (dataSongs) {
        playlist = dataSongs
            .split(',')
            .map((name) => name.trim())
            .map((name) => ({
                title: name,
                src: `./assets/music/${name}.mp3`,
                cover: `./assets/images/${name}.png`,
            }));
    } else {
        playlist = [
            {
                title: title.innerText,
                src: audio.getAttribute('src'),
                cover: cover.getAttribute('src'),
            },
        ];
    }

    // Each player remembers its own position in its own playlist.
    let songIndex = 0;
    loadSong(playlist[songIndex]);

    function loadSong(track) {
        title.innerText = track.title;
        audio.src = track.src;
        cover.src = track.cover;
    }

    function playSong() {
        container.classList.add('play');
        playBtn.querySelector('i.fas').classList.remove('fa-play');
        playBtn.querySelector('i.fas').classList.add('fa-pause');
        audio.play();
    }

    function pauseSong() {
        container.classList.remove('play');
        playBtn.querySelector('i.fas').classList.add('fa-play');
        playBtn.querySelector('i.fas').classList.remove('fa-pause');
        audio.pause();
    }

    // Stop: pause and rewind to the very start (used when a track finishes
    // and we don't want it to loop).
    function stopSong() {
        pauseSong();
        audio.currentTime = 0;
        progress.style.width = '0%';
    }

    // When a track finishes: move to the next one if there is one, otherwise
    // stop. No wrap-around, so the player never loops on its own.
    function handleEnded() {
        if (songIndex < playlist.length - 1) {
            nextSong();
        } else {
            stopSong();
        }
    }

    function prevSong() {
        songIndex--;
        if (songIndex < 0) {
            songIndex = playlist.length - 1;
        }
        loadSong(playlist[songIndex]);
        playSong();
    }

    function nextSong() {
        songIndex++;
        if (songIndex > playlist.length - 1) {
            songIndex = 0;
        }
        loadSong(playlist[songIndex]);
        playSong();
    }

    function updateProgress(e) {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
    }

    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    }

    // Event Listeners (scoped to this player's elements)
    playBtn.addEventListener('click', () => {
        const isPlaying = container.classList.contains('play');
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    });

    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    audio.addEventListener('timeupdate', updateProgress);
    progressContainer.addEventListener('click', setProgress);
    audio.addEventListener('ended', handleEnded);
}

// Turn EVERY .music-container on the page into its own player.
document.querySelectorAll('.music-container').forEach(initPlayer);
