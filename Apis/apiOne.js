const reviewElement = document.querySelector('.reviews');
const reviewTemplate = document.getElementById('review-item');
const criticElement = document.querySelector('.critics');
const criticTemplate = document.getElementById('critic-item');

const xhr = new XMLHttpRequest();

const API_N = 'UbsMbKtd9JKyBhGjMGGnrcMHjJFctMKw';
xhr.open('GET', `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${API_N}`);

xhr.responseType = 'json';

xhr.onload = function() {
  const listOfReviews = xhr.response.results;
  console.log(listOfReviews);
  for (const review of listOfReviews) {
    const reviewEl = document.importNode(reviewTemplate.content, true);
    reviewEl.querySelector('h2').textContent = review.title;
    reviewEl.querySelector('p').textContent = review.description;
    reviewEl.querySelector('small').textContent = review.author;
    reviewElement.append(reviewEl);
  }
}

xhr.send();


    // }
    // const url = `https://api.nytimes.com/svc/books/v3/lists.json?api-key=${API_N}`

  /////////////// WITH FETCH //////////////////
    
    function execute() {
    const url = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=UbsMbKtd9JKyBhGjMGGnrcMHjJFctMKw';
    const options = {
      method: "GET",
      headers: {
        "Accept": "application/json"
      },
    };
    return fetch(url, options).then(
      response => {
        return response.json();
        // if (response.ok) {
        //   // return response.results;
        //   console.log(response);
        // }
        // return response.text().then(err => {
        //   return Promise.reject({
        //     status: response.status,
        //     statusText: response.statusText,
        //     errorMessage: err,
        //   });
        // });
      })
      .then(data => {
        console.log(data.results);
        const listOfCritics = data.results;
  console.log(listOfCritics);
  for (const critic of listOfCritics) {
    const criticEl = document.importNode(criticTemplate.content, true);
    criticEl.querySelector('h2').textContent = critic.display_title;
    criticEl.querySelector('p').textContent = critic.headline;
    criticEl.querySelector('small').textContent = critic.byline;
    criticElement.append(criticEl);
  }
      })
      .catch(err => {
        console.error(err);
      });
  }
  
  execute()