gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);


// gsap.defaults({ease: none});

// const main = gsap.timeline()
// .from


let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight); 

window.addEventListener('scroll', onScroll);


function onScroll() {   

    // let updateOne = gsap.timeline({
    //     ScrollTrigger
    // })
    // pathOne();
    pathTwo();

}

let path = document.getElementById('movement');
let pathLength = path.getTotalLength();
let path2 = document.getElementById('radiant');
let pathLength2 = path2.getTotalLength();
let path3 = document.getElementById('lastwoman');
let pathLength3 = path3.getTotalLength();

path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;

path2.style.strokeDasharray = pathLength2 + ' ' + pathLength2;
path2.style.strokeDashoffset = pathLength2;

path3.style.strokeDasharray = pathLength3 + ' ' + pathLength3;
path3.style.strokeDashoffset = pathLength3;

function pathOne(){
    console.log('hi');
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight); 

    let drawLength = pathLength * scrollPercentage;

    path.style.strokeDashoffset = pathLength - drawLength;
}
function pathTwo(){
    console.log('hi');
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight); 

    let drawLength = pathLength2 * scrollPercentage;

    path2.style.strokeDashoffset = pathLength2 - drawLength;
}