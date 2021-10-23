const keywords = JSON.parse(sessionStorage.getItem('keywords'));

console.log(sessionStorage.getItem('keyword'));
document.getElementById('subtitle').innerText = sessionStorage.getItem('keyword');
function searchClick() {
    var input = document.getElementById('searchBar');
    if (input.value == "search for another keyword") {
        input.value = "";
    }
}

$(document).ready(function() {
    $('#searchBar').keyup(function(event) {
        if (event.key === "Enter") {
            var input = document.getElementById('searchBar');
            if (true /* if input.value is in keywords*/){
                sessionStorage.setItem('keyword', input.value);
                window.location.href = 'searchResult.html';
            }
            else {
                document.getElementById('error').innerText = 'keyword not found';
            }
        }
    })
});