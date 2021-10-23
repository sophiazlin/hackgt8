document.addEventListener('click', event => {
    if (event.target.id == 'submit') {
        console.log("HI");
    }
})

$(window).scroll(function() {
    var height = $(window).scrollTop();         //where the screen is scrolled to
    if (height > 100) {                         //if past a certain point, make nav bar fixed
        $('.homepage').css({'background-color':'rgba(0, 0, 0, 0)'});
    }
    else{                                       //make nav bar absolute (with rest of html)
        $('.homepage').css({'background-color':'rgba(0, 0, 0, 0.5)'});
    }
});
