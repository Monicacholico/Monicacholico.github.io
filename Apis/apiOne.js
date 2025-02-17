const reviewElement = document.querySelector('.reviews');
const reviewTemplate = document.getElementById('review-item');
const bookElement = document.querySelector('.books');
const bookTemplate = document.getElementById('book-item');
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



  //// GRAPQHL ////

  function executeRequest() {
    const query = `
    query {
      Lift(id: "panorama") {
        name
        status
      }
    }
  `;

  const url = 'https://snowtooth.moonhighway.com/'
  const opts = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({query})
  };

  return fetch (url, opts).then(
    res => res.json())
    .then(({data}) => {
      document.getElementById('name').textContent = data.Lift.name;
      document.getElementById('status').textContent = data.Lift.status;
      }
    )
    .catch(console.error);
  }

  executeRequest();



//// PROMISE /////////




const url = 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=UbsMbKtd9JKyBhGjMGGnrcMHjJFctMKw';
const options = {
  method: "GET",
  headers: {
    "Accept": "application/json"
  },
};
const setPromise = () =>  {
  // const promise = new Promise((resolve, reject) => {
    // success => {
    //   resolve(success);
    // }
    fetch(url, options).then(
      response => {
        return response.json();
      }).then( data => {
        console.log(data.results);
        const listOfBooks = data.results;
        console.log(listOfBooks);
        for (const book of listOfBooks) {
          const bookEl = document.importNode(bookTemplate.content, true);
          bookEl.querySelector('h2').textContent = book.display_name;
          bookEl.querySelector('p').textContent = book.list_name;
          bookEl.querySelector('small').textContent = book.updated;
          bookElement.append(bookEl);
        }
      })
      .catch(err => {
        console.error(err);
      });
  // })
  // return promise;
}

setPromise()




function executeApi() {
  const url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=lebowski&api-key=UbsMbKtd9JKyBhGjMGGnrcMHjJFctMKw';
  const options = {
    "method": "GET",
    "headers": {
    "Accept": "application/json"
    }
  };
  return fetch(url, options).then(
    response => {
      return response.json();
    }
  ).then(data => {
    console.log(data);

  })

}

executeApi();

// function executeApi1() {

//   const url = ('https://jsonplaceholder.typicode.com/comments');
//   const options = {
//       method: 'GET',
//       headers : {
//           "Accept": "Application/json"
//       }
//   };

//   return fetch(url, options).then(
//       response => {
//           return response.json();
//       }
//   ).then( data => {
//       console.log(data);
//       const listOfBooks = data;
//       for(let book of listOfBooks){
//           const bookList = document.getElementById('bookUl');
//           const li = document.createElement('li');
//           const html = `
//               <h2>${book.name}</h2>
//               <p>${book.email}</p>
//           `;
//           bookList.appendChild(li);
//           li.innerHTML = html;
//       }

//   })

// }

// executeApi1();