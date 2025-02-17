
function executeApi() {
    const url = 'https://randomuser.me/api/?results=50';
    const options = {
        method: 'GET',
        headers: {
            "Accept": "application/json"
        }
    };
    return fetch(url, options).then (
        response => {
            return response.json();
        })
        .then(data => {
            console.log(data.results);
            const listOfUsers = data.results;
            const ul = document.querySelector('ul');
            for(const user of listOfUsers) {
                const li = document.createElement('li');
                const h2 = document.createElement('h2');
                const img = document.createElement('img');
                const image = user.picture.large;
                img.setAttribute('src', `${image}`);
                ul.appendChild(li);
                li.appendChild(h2);
                li.appendChild(img);
                const name = user.name.first;
                const lastName = user.name.last;
                h2.textContent = `${name} ${lastName}`;
            }
        })
}

console.log('helloooo')

executeApi();