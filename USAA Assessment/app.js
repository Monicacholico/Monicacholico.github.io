
// Variables for districts Array

var districtOne = 112;
var districtTwo = 98;
var districtThree = 119;
var districtFour = 126;
var districtFive = 129;
var districtSix = 44;
var districtSeven = 118;
var districtEight = 125;
var districtNine = 101;
var districtTen = 27;


total = 0;

const districts = [districtOne, districtTwo, districtThree, districtFour, districtFive, districtSix, districtSeven, districtEight, districtNine, districtTen];

for ( var i = 0; i < districts.length; i++ ) {
    total += districts[i];
    document.getElementById("district" + (i + 1)).innerHTML = districts[i] + " Pledges";
}

var stopCounter = setInterval(pledgeCounter, 1);
var counter = 0;
function pledgeCounter() {
    document.getElementById("count").innerHTML = counter;
    counter++;
    if ( counter === 1424 ) {
        clearInterval(stopCounter);
    }
}

var width = 0;
var idDistrict = 1;

function animate() {
    var id = setInterval(animateBar, 20);
    function animateBar() {
        width++;
        var widthBar = document.getElementById("bar" + idDistrict);
        var percentage = ((districts[idDistrict-1]/total) * 100).toFixed(1) * 2;
        widthBar.style.width = width + '%';
        if ( width >= percentage ) {
            width = 0;
            idDistrict++;
        }
        if ( idDistrict > districts.length ) {
            clearInterval(id);
        }
    }
};


window.onload = function(){
    animate();
};