var keywords = [
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
keyword = sessionStorage.getItem('keyword');
// console.log(keywords)

// console.log(sessionStorage.getItem('keyword'));
document.getElementById('subtitle').innerText = sessionStorage.getItem('keyword');

function searchClick() {
    var input = document.getElementById('searchBar');
    if (input.value == "search for another keyword") {
        input.value = "";
    }
}
function searchClickOff() {
    var input = document.getElementById('searchBar');
    if (input.value.replace(/\s+/g, '') == "") {
        input.value = "search for another keyword";
    }
}

$(document).ready(function() {
    $('#searchBar').keyup(function(event) {
        if (event.key === "Enter") {
            var input = document.getElementById('searchBar');
            for (let i = 0; i < keywords.length; i++) {
                if (keywords[i][0] == input.value.toLowerCase()) {
                    sessionStorage.setItem('keyword', input.value.toLowerCase());
                    window.location.href = 'searchResult.html';
                    break;
                }
                else if (i == keywords.length-1) {
                    document.getElementById('error').innerText = 'keyword not found';
                }
            }
        }
    })
});

function setImg(keywords, keyword) {
    for (let i = 0; i < keywords.length; i++) {
        if (keywords[i][0] == keyword) {
            sessionStorage.setItem('keyword', keyword);
            document.getElementById("keyimg").src = keywords[i][1];
            //document.getElementById("keyimg").src = "images/decoderLogo.png";
            document.getElementById('error').innerText = '';
            break;
        }
        else {
            document.getElementById('error').innerText = 'keyword not found';
        }
    }
}

setImg(keywords, keyword);