$(document).ready(function(){
    $('.button').hide();

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.button').fadeIn('1000');
        }else{
            $('.button').fadeOut('1000');
        }
    });

    $('.button').click(function(){
        $('body, html').animate({
            scrollTop:0
        },500);
    })
    
})