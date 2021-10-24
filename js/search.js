keywords = JSON.parse(sessionStorage.getItem('keywords'));

function searchClick() {
    var input = document.getElementById('searchBar');
    if (input.value == "type in keyword here") {
        input.value = "";
    }
}
function searchClickOff() {
    var input = document.getElementById('searchBar');
    if (input.value.replace(/\s+/g, '') == "") {
        input.value = "type in keyword here";
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