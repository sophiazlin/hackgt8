function searchClick() {
    var input = document.getElementById('searchBar');
    if (input.value == "type in keyword here") {
        input.value = "";
    }
}

$(document).ready(function() {
    $('#searchBar').keyup(function(event) {
        console.log('hi');
        if (event.key === "Enter") {
            console.log('hi2');
            var input = document.getElementById('searchBar');
            if (input.value.indexOf(' ') < 0 /* && input.value is in keywords*/){
                sessionStorage.setItem('keyword', input.value);
                window.location.href = 'searchResult.html';
            }
        }
    })
});