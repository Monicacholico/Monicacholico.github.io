

$(document).ready(function (){
   


    function handler(event) {
        var target = $(event.target);
        var activeTabHome = $('#home');
        console.log(activeTabHome)
        if( target.is('a')){
        
        }
    }

    $('li').click(handler);

    // $('li').click(function(event){
    //     var target = $(event.target);
    //     console.log(target.)
    //     if(target.is('a') && target.attr == ('#home')){
        //    console.log($('#home').class('display', 'block')) ;
        // } 
        // alert('hello world');
        // console.log(event.target);
        // if($('li') === $('#home')){
        //     $('#home').css('display', 'block')
        //     console.log(tab);
        // }

    // })




});