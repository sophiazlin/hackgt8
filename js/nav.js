
$(window).scroll(function() {
    var height = $(window).scrollTop();         //where the screen is scrolled to
    if (height > 600) {                         //if past a certain point, make nav bar fixed
        $('nav.main').css({'position':'fixed', 'background-color':'rgba(0, 0, 0, 255)', 'opacity':'1', 'z-index':'99999'});
    }
    else if (height > 350){                     //transition for opacity without changing location
        $('nav.main').css({'opacity':'0', 'background-color':'rgba(0, 0, 0, 0)', 'z-index':'99'});
    }
    else{                                       //make nav bar absolute (with rest of html)
        $('nav.main').css({'position':'absolute', 'background-color':'rgba(0, 0, 0, 0)', 'opacity':'1', 'z-index':'99'});
    }
});
