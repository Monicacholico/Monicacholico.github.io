const attributes = [
    'strong', 'medium', 'weak',
    'high', 'regular', 'low',
    'wide', 'regular width', 'narrow',
    'advanced', 'intermediate', 'begginer',
    'long', 'medium length', 'short',
    'egyptian', 'giselle', 'greek'
];

function checkAlpha(attribute) {
return attribute.indexOf(-1)
}

function myFunction(){
    document.getElementById('display').innerHTML = attributes.filter(checkAlpha);
}

const shoes = [
    'alpha', 'elite', 'recital', 'balance', 'contempora'
];


function checkShoe(attribute) {
    for(shoe of shoes){
        if(attribute === 'strong', 'long', 'egyptian'){
            return shoes[0];
        }
    }
}
