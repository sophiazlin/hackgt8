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

var word = new Array(keywords.length);
var img = new Array(keywords.length);

for (let i = 0; i < keywords.length; i++) {
    word[i] = document.createElement("p");
    word[i].innerText = keywords[i][0];
    img[i] = document.createElement('img');
    img[i].className = "square";
    img[i].src = keywords[i][1];
    if (i % 2 == 0) {
        document.getElementById('list1').appendChild(word[i]);
        document.getElementById('list1').appendChild(img[i]);
    } else {
        document.getElementById('list2').appendChild(word[i]);
        document.getElementById('list2').appendChild(img[i]);
    }
}
