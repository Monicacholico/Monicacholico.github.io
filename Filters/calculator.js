document.querySelector('#tip-form').onchange = function(){

    var bill = Number(document.getElementById('billTotal').value);
    var tip = document.getElementById('tipInput').value;
    document.getElementById('tipOutput').innerHTML = 
    `${tip}%`;
    var tipValue = bill * (tip/ 100)
    var finalbill = bill + tipValue
    console.log(finalbill);

    var tipAmount = document.querySelector('#tipAmount');
    var totalBillWithTip = document.querySelector('#totalBillWithtip');

    tipAmount.value = tipValue.toFixed(2);
    totalBillWithTip.value = finalbill.toFixed(2);

    //show results

    document.getElementById('results').style.display = 'block'
}