'use strict'

// ex. 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
function fibonacci(num) {
    let curr,
    a = 1,
    b = 0;
    while(num >= 0) {
        curr = a;
        a = a + b;
        b = curr;
        num--;
        console.log(b);
        console.log(curr);
        console.log(num);
    }
    console.log(b);
    console.log(curr);
    console.log(num);
    return b ;
}

const resFibonacci = fibonacci(12);
console.log({resFibonacci});



function fib(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
      console.log(arr[i - 2]);
      console.log(arr[i -1]);
      console.log(arr[i]);
    }
    console.log(arr)
   return arr[n]
  }

  const resfib = fib(10);
  console.log({resfib});

  var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 10; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}



function fiboMap(length) {
    let fiboArr = [0,1];
    const fiboSol = fiboArr.map(arrEl => {
        fiboArr.push(fiboArr[arrEl - 2] + fiboArr[arrEl -1])
    })
    fiboArr.length = length;
    return fiboSol;
}

console.log(fiboMap(10));


function testArray(num) {
    // let array = Array.from({lenght: araryLenght},(v,i) => i );
    let array = Array.from({length: num}, (v,i) => i)
    const theArray = array.map(arEl => {
        array.push(array[arEl - 2] + array[arEl -1])
        console.log(array[arEl]);
    })
    return theArray;
}

const resTestArray = testArray(20);
console.log({resTestArray});


// console.log(Array.from({length: 40}), (v,i) => i);
console.log(Array.from({length: 40}, (v,i) => i));



function fibo(n) {
    let arr = [0,1];
    for(let i = 2; i < n + 1; i++) {
        arr.push(arr[i -2] + arr[i - 1]);
        console.log(arr[i]);
    }
    console.log(arr.join(','));
    return arr[n];
}

console.log(fibo(10));


// Rotate an array

const anArray = Array.from({length: 40},(v,i) => i);

function rotateArray(arr, n) {
    let i = 0;
    while (i < n) {
        arr.unshift(arr.pop());
        i++
    }
    return arr;
}
console.log(rotateArray(anArray, 38));


function anotherFib(num) {
    let fibArray = [1,2];
    for(let i = 2; i < num + 1; i++) {
        fibArray.push(fibArray[i - 2] + fibArray[i -1])
        console.log(fibArray[i]);
    }
    return fibArray[num];
}

console.log(anotherFib(10));


const appendElem = document.querySelector('.wrapper');
console.log(appendElem);
function execution() {
    const url = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=UbsMbKtd9JKyBhGjMGGnrcMHjJFctMKw';
    const options = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    };

    return fetch(url, options).then(res => {
        return res.json();
    }).then(data => {
        console.log(data.results);
        const listOfData = data.results;
        listOfData.forEach(function(elem) {
            const li = document.createElement('li');
            appendElem.append(li);
            const html = `
            <h2>${elem.display_title}</h2>
            <p>${elem.byline}</p>
            `;
            li.innerHTML = html;
        })
    })
}

// execution();



function executeApi() {

    const url = ('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=UbsMbKtd9JKyBhGjMGGnrcMHjJFctMKw');
    const options = {
        method: 'GET',
        headers : {
            "Accept": "Application/json"
        }
    };

    return fetch(url, options).then(
        response => {
            return response.json();
        }
    ).then( data => {
        console.log(data.results);
        const listOfBooks = data.results;
        for(let book of listOfBooks){
            const bookList = document.querySelector('ul');
            const li = document.createElement('li');
            const html = `
                <h2>${book.display_title}</h2>
                <p>${book.headline}</p>
            `;
            bookList.appendChild(li);
            li.innerHTML = html;
        }

    })

}

executeApi();


//reverse a given string;

 const myString = 'Hello World';
 let arrString = myString.split('');
 console.log(arrString)
 const arrReversed = arrString.reverse();
 const striArrsy = arrReversed.join(' ');
 console.log(typeof(arrReversed));
 console.log(typeof(striArrsy));
console.log({striArrsy});



function rotateString(arr, r){
    let i =0;
    while(i < r) {
        arr.unshift(arr.pop());
        i++;
    }
    return arr;
}
console.log(rotateString(arrReversed, 3));


//recursion

function recursing(number) {
    if(number === 1) {
        return 1;
    } else {
        return ` ${number} * ${recursing(number - 1)}`;
    }

}

console.log(recursing(5));

function countdown(i) {
    console.log(i);
    if(i === 0) {
        return;
    } else {
        return countdown(i-1);
    }
}

countdown(6);

