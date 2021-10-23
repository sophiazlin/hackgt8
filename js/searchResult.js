console.log(sessionStorage.getItem('keyword'));
document.getElementById('subtitle').innerText = sessionStorage.getItem('keyword');
function searchClick() {
    var input = document.getElementById('searchBar');
    if (input.value == "search for another keyword") {
        input.value = "";
    }
}