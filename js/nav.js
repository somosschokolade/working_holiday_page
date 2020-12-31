$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('nav_white');
    }
    else {
        $('nav').removeClass('nav_white');
    }
})

