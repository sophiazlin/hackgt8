keywords = JSON.parse(sessionStorage.getItem('keywords'));

var word = new Array(keywords.length);
var img = new Array(keywords.length);

for (let i = 0; i < keywords.length; i++) {
    word[i] = document.createElement("p");
    word[i].innerText = keywords[i][0];
    img[i] = document.createElement('img');
    img[i].className = "square";
    img[i].src = keywords[i][1];
    if (i < (keywords.length / 2)) {
        document.getElementById('list1').appendChild(word[i]);
        document.getElementById('list1').appendChild(img[i]);
    } else {
        document.getElementById('list2').appendChild(word[i]);
        document.getElementById('list2').appendChild(img[i]);
    }
}
