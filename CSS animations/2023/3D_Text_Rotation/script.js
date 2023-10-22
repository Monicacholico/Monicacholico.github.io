const spans = document.querySelectorAll('span');
const names = ['nella', 'masha', 'diana', 'natalia','misty', 'francesca', 'bella', 'tyler', 'sarah', 'skylar', 'greta','eva', 'iana', 'elisa'];
const colors = ['crimson', 'hotpink', '#fce4ecdd','#e3f2fddd', '#ea6cd22', '#e3f8fddd', 'greenlight', 'yellow', 'pink', 'rgba(22, 22, 22, 0.1', 'rgba(224, 223, 221, 0.1', 'crimson', 'hotpink', '#fce4ecdd'];

const ballerinas = [
    {
        name: 'nella',
        color: 'crimson',
        bgImg: 'marianella.jpg'
    },
    {
        name: 'masha',
        color: 'hotpink',
        bgImg: 'kochetkova.jpeg'
    },
    {
        name: 'diana',
        color: '#fce4ecdd',
        bgImg: 'vishneva.jpeg'
    },
    {
        name: 'natalia',
        color: '#e3f2fddd',
        bgImg: 'osipova.jpeg'
    },
    {
        name: 'misty',
        color: '#ea6cd22',
        bgImg: 'misty.jpeg'
    },
    {
        name: 'francesca',
        color: '#e3f8fddd',
        bgImg: 'francesca.jpeg'
    },
    {
        name: 'bella',
        color: 'greenlight',
        bgImg: 'isabella.jpeg'
    },
    {
        name: 'tiler',
        color: 'yellow',
        bgImg: 'tiler.jpeg'
    },
    {
        name: 'evgenia',
        color: 'pink',
        bgImg: 'evgenia.jpeg'
    },
    {
        name: 'sarah',
        color: 'rgba(158, 158, 158, 1',
        bgImg: 'sarah.jpeg'
    },
    {
        name: 'skylar',
        color: 'rgba(255, 255, 255, 0.8',
        bgImg: 'skylar.jpeg'
    },
    {
        name: 'greta',
        color: '#fce4ecdd', 
        bgImg: 'greta.jpeg'
    },
    {
        name: 'svetlana',
        color: 'crimson',
        bgImg: 'svetlana.jpeg'
    },
    {
        name: 'iana',
        color: 'hotpink',
        bgImg: 'iana.jpeg'
    },
    {
        name: 'elisa',
        color: 'hotpink',
        bgImg: 'elisa.jpeg'
    },
    
]



let current;
spans.forEach( (span, id) => {
    span.classList.add('content');
        ballerinas.forEach((ballerina, bid) => {
            if(id === bid) {
                span.innerText = ballerinas[id].name;
                span.style.color = ballerinas[id].color;
                if(span.firstChild !== 'img'){
                    const img = document.createElement('img');
                    img.setAttribute('src', `${ballerinas[id].bgImg}`);
                    span.append(img);
                }
                // span.style.backgroundImage = `url(${ballerinas[id].bgImg})`;
            }
        })
        span.querySelector('img').addEventListener('click', () => {
            console.log(span.innerText);
        });
})