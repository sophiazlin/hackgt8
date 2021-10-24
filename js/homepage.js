const keywords = [
    ["bouquet garni", "images/keywords/bouquetGarni.jpg"],
    ["dice", "images/keywords/dice.jfif"],
    ["fold", "images/keywords/fold.jpg"],
    ["julienne", "images/keywords/julienne.jpg"],
    ["mince", "images/keywords/mince.jpg"],
    ["poach", "images/keywords/poach.jpg"],
    ["sift", "images/keywords/sift.jpg"],
    ["soft peaks", "images/keywords/softPeaks.jpg"],
    ["stiff peaks", "images/keywords/stiffPeaks.jfif"],
    ["zest", "images/keywords/zest.jpg"]
];

var input;
var indexMap;

document.addEventListener('click', event => {
    if (event.target.id == 'submit') {
        input = $("#input").val();
        input = input.replace(/\n/g, '<br/>')
        sessionStorage.setItem("input", input)
        window.location.href = "decoder.html";
    }
})

function inputClick() {
    var input = document.getElementById('input');
    if (input.value == "Please type your recipe in here!") {
        input.value = "";
    }
}  

function inputClickOff() {
    var input = document.getElementById('input');
    if (input.value.replace(/\s+/g, '') == "") {
        input.value = "Please type your recipe in here!";
    }
}  

var trans = false;                 // false = above transition; true = below transition
var transMotion = false;            // false = not in motion; true = in motion

function arrowClick() {
    if (!transMotion){                          //if screen not in motion
        if (!trans){                           //if above transition
            transMotion = true;             //in motion
            $("html, body").clearQueue().finish();      //finish all other events (just in case)
            $("html, body").animate({scrollTop: $("#recipeContainer").offset().top+100}, 1000)    //move past transition

            setTimeout(function(){
                transMotion=false;          //once transition is finished, set motion to false
            }, 1000)
            trans=true;                    //set past trans1
        }
    }
}

$(window).scroll(function() {
    var height = $(window).scrollTop();         //how far the page has been scrolled
    console.log(height, trans, transMotion);
    if (!transMotion){                          //if screen not in motion
        if (!trans){                           //if above transition
            if (height > 50){                  //if past a certain point
                transMotion = true;             //in motion
                $("html, body").clearQueue().finish();      //finish all other events (just in case)
                $("html, body").animate({scrollTop: $("#recipeContainer").offset().top+100}, 1000)    //move past transition

                setTimeout(function(){
                    transMotion=false;          //once transition is finished, set motion to false
                }, 1000)
                trans=true;                    //set past trans1
            }
        }
        else {                                   //if below transition
            if (height < $("#recipeContainer").offset().top-50){        //if above a certain point
                transMotion = true;
                $("html, body").clearQueue().finish();                  //finish other events
                $("html, body").animate({scrollTop: 0}, 1000);          //move past transition

                setTimeout(function(){
                    transMotion=false;                          //once transition is finished, set motion to false
                }, 1000)
                trans=false;                                   //set above trans1
            }
        }
    }
});