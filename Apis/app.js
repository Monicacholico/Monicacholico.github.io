// fetch("./data.json")
// .then(response =>{
//     return response.json();
// })
// .then(data => {
//     console.log(data.pointeShoes);
// const div = document.getElementById('featuredProfile');
// console.log(div);
// div.innerText = data.pointeShoes;
//     });

async function fetchingPointes(){
    const response = await fetch("data.json");
    const data = await response.json();
    console.log(data);
    document.getElementById('featuredProfile').innerText = JSON.stringify(data);
}
fetchingPointes();
