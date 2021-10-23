
$(window).scroll(function() {
    var height = $(window).scrollTop();         //where the screen is scrolled to
    if (height > 300) {                         //if past a certain point, make nav bar fixed
        $('nav.main').css({'position':'fixed', 'background-color':'rgba(0, 0, 0, 255)', 'z-index':'99999'});
        $('nav ul').css({'opacity':'1'});
    }
    else if (height < 100) {                     //transition for opacity without changing location
        $('nav.main').css({'position':'absolute', 'background-color':'rgba(0, 0, 0, 0)', 'z-index':'99999'});
        $('nav ul').css({'opacity':'1'});
    }
    else{                                       //make nav bar absolute (with rest of html)
        $('nav.main').css({'background-color':'rgba(0, 0, 0, 0)', 'z-index':'99999'});
        $('nav ul').css({'opacity':'0'});
    }
});
