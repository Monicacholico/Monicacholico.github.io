// const xhr = new XMLHttpRequest();


// const API_N = 'UbsMbKtd9JKyBhGjMGGnrcMHjJFctMKw';
// xhr.open('GET', `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_N}`);

// xhr.onload = function() {
//     console.log(xhr.response);
// }

// xhr.send();


// xhr.onload = function() {
    
    // }
    // const url = `https://api.nytimes.com/svc/books/v3/lists.json?api-key=${API_N}`
    function execute() {
    const url = 'https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=UbsMbKtd9JKyBhGjMGGnrcMHjJFctMKw';
    const options = {
      method: "GET",
      headers: {
        "Accept": "application/json"
      },
    };
    fetch(url, options).then(
      response => {
        if (response.ok) {
          return response.text();
        }
        return response.text().then(err => {
          return Promise.reject({
            status: response.status,
            statusText: response.statusText,
            errorMessage: err,
          });
        });
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
  }
  

  execute();