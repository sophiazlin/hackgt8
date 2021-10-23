var input;
var indexMap;

document.addEventListener('click', event => {
    if (event.target.id == 'submit') {
        input = $("#input").val();
        indexMap = decoder(input);
        sessionStorage.setItem("input", input)
        window.location.href = "decoder.html";
    }
})

function decoder(input) {
    const keywords = ["soft peaks", "stiff peaks", "sift", "fold"];
    var str = input.toLowerCase();
    const indexMap = new Map();
    for (let i = 0; i < keywords.length; i++) {
        var start = 0;
        while(start <= str.length) {
            var index = str.indexOf(keywords[i], start);
            if(index != -1) {
                if (index == 0 || str.charAt(index - 1).match(/([_\W])/)) {
                    if(indexMap.get(keywords[i]) != undefined) {
                        indexMap.get(keywords[i]).push(index);
                    } else {
                        indexMap.set(keywords[i], [index]);
                    }
                
                }
                start = index + 1;
            } else {
            break;
            }
        }
    }
    return indexMap;
}

var trans = false;                 // false = above transition; true = below transition
var transMotion = false;            // false = not in motion; true = in motion

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