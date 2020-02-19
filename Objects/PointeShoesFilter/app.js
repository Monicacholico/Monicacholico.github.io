const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filterLevel = '') => {
    const movieList = document.getElementById('movie-list');
    if(movies.length === 0){
        movieList.classList.remove('visible');
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filteredMovies = !filterLevel
    ? movies : 
    movies.filter( movie => movie.info.Level.includes(filterLevel));

    filteredMovies.forEach( movie => {
        const movieEl = document.createElement('li');
        // movieEl.textContent = movie.info.title;
        let text = `${movie.info.title}</br> `;
        for(const key in movie.info){ 
            if(key !== 'title') {
                text = text + ` ${key}: ${movie.info[key]}</br>`;
            }
        }
        movieEl.innerHTML = text;
        movieList.append(movieEl);
    });
}

const addMovieHandler = () => {
    const title= document.getElementById('title').value;
    const extraLevel = document.getElementById('extra-level').value;
    const extraType = document.getElementById('extra-type').value;

    if (
        title.trim() === '' ||
        extraLevel.trim() === '' ||
        extraType.trim() === '' 
        ){
            return;
        }
        const newMovie = {
            info: {
                title,
                Level: extraLevel,
                Type: extraType,

            },
            id: Math.random()
        };
    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    const filteredLevel = document.getElementById('filter-level').value;
    renderMovies(filteredLevel);
}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);




