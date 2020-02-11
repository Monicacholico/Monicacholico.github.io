document.querySelector('#tip-form').onchange = function(){

    var bill = Number(document.getElementById('billTotal').value);
    var tip = document.getElementById('tipInput').value;
    document.getElementById('tipOutput').innerHTML = 
    `${tip}%`;
    var tipValue = bill * (tip/ 100)
    var finalbill = bill + tipValue
    console.log(finalbill);
}