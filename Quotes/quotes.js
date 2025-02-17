
quotes = [
    {
        text: "You might not think that programmers are artists, but programming is a extremely creative profession. It's logic-based creativity",
        author: "John Romero",
        color: "black"
    },
    {
        text: "I am thankful the most important key in history was invented. It's not the key to your house, your car, your boat, your safety deposit box, your bike lock or your private community. It's the key to order, sanity, and peace of mind. The key is 'Delete.",
        author: "Elayne Booster",
        color: "cadetblue"
    },
    {
        text: "The internet could be a very positive step towards education, organisation and participation in a meaningful society.",
        author: "Noam Chomsky",
        color: "hotpink"
    },
    {
        text: "There is a real danger that computers will develop intelligence and take over. We urgently need to develop direct connections to the brain so that computers can add to human intelligence rather than be in opposition",
        author: "Stephen Hawkins",
        color: "slateblue"
    },
    {
        text: "One essential object is to choose that arrangement which shall tend to reduce to a minimum the time necessary for completing the calculation.",
        author: "Ada Lovelace",
        color: "rosybrown"
    },
    {
        text: "Hope & curiosity about the future seemed better than guarantees. The unknown was always so attractive to me...and still is.",
        author: "Hedy Lamarr",
        color: "lightsteelblue"
    },
    {
        text: "If women had been more prominently talked about in computing, both in the history books and schools, we literally would not have the lack of women programmers that we do today.",
        author: "Reshman Saujani",
        color: "lightcoral"
    }
];

function init() {
    /*
     * First steps: use alert to see the values of your object properties
     *
     *
    var quoteText = firstQuote.text;
    var quoteAuthor = firstQuote.author;
    alert(quoteAuthor + " said " + quoteText);
 
    alert(firstQuote.text + " said " + firstQuote.author);
 
    alert("There are " + quotes.length + " quotes in the array.");
    for (var i = 0; i < quotes.length; i++) {
        alert(quotes[i].author + " said: " + quotes[i].text);
    }
    */
    //displayQuote(quotes[0].text, quotes[0].author, quotes[0].color);
    //displayQuote(quotes[0]);
    displayQuote(quotes);
    setInterval("displayQuote(quotes)", 1000);
}
window.onload = init;

/*
 * First version of displayQuote: it takes each object
 * property value separately.
 *
function displayQuote(text, author, color) {
    var textElement = document.getElementById("text");
    var authorElement = document.getElementById("author");
 
    textElement.innerHTML = text;
    authorElement.innerHTML = author;
 
    var bigBubble = document.getElementById("bigBubble");
    bigBubble.style.background = color;
    var mediumBubble = document.getElementById("mediumBubble");
    mediumBubble.style.background = color;
    var smallBubble = document.getElementById("smallBubble");
    smallBubble.style.background = color;
}
*/

/* 
 * Second version of displayQuote takes the entire object.
 *
 *
function displayQuote(quote) {
    var textElement = document.getElementById("text");
    var authorElement = document.getElementById("author");
 
    textElement.innerHTML = quote.text;
    authorElement.innerHTML = quote.author;
 
    var bigBubble = document.getElementById("bigBubble");
    bigBubble.style.background = quote.color;
    var mediumBubble = document.getElementById("mediumBubble");
    mediumBubble.style.background = quote.color;
    var smallBubble = document.getElementById("smallBubble");
    smallBubble.style.background = quote.color;
}
*/

/*
 * Third version of displayQuote takes the entire array
 * and randomly selects a quote to display.
 *
 */
function displayQuote(quotes) {
    var index = Math.floor(Math.random() * quotes.length);
    var quote = quotes[index];

    var textElement = document.getElementById("text");
    var authorElement = document.getElementById("author");

    textElement.innerHTML = quote.text;
    authorElement.innerHTML = quote.author;

    var bigBubble = document.getElementById("bigBubble");
    bigBubble.style.background = quote.color;
    var mediumBubble = document.getElementById("mediumBubble");
    mediumBubble.style.background = quote.color;
    var smallBubble = document.getElementById("smallBubble");
    smallBubble.style.background = quote.color;
    smallBubble.style.width = 55 +"px";


}


// var width = 0;
// var height = 0;
// var animateSizing = setInterval(animate, 20);
// function animate(){
//     width++;
//     height++;
//     var buble = document.getElementsByTagName("div");
//     buble.style.width = width + 'px';
//     if(buble.style.width < 15 +"px" && buble.style.height < 15 + "px"){
//         buble.style.width = 55 + "px";
//     }
//     console.log(buble);
//     clearInterval(animateSizing);
// }
//
// window.onload = function(){
//     animate();
// };