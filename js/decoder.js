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

sessionStorage.setItem('keywords', JSON.stringify(keywords));
var input = sessionStorage.getItem('input');

function decoder(input) {
    var str = input.toLowerCase();
    const indexMap = new Map();
    for (let i = 0; i < keywords.length; i++) {
        var start = 0;
        while(start <= str.length) {
            var index = str.indexOf(keywords[i][0], start);
            if(index != -1) {
                if (index == 0 || str.charAt(index - 1).match(/([_\W])/)) {
                    if(indexMap.get(keywords[i][0]) != undefined) {
                        indexMap.get(keywords[i][0]).push(index);
                    } else {
                        indexMap.set(keywords[i][0], [index]);
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
var indexMap = decoder(input);

function indexes(indexMap) {
    var intArray = [];

    for (let [key, value] of indexMap) {
        let length = key.length
        for (let v of value) {
            intArray.push(v)
            intArray.push(v + length)
        }
    }
    return intArray;
}

var intArray = indexes(indexMap);

// order from largest to smallest
intArray.sort(function(a, b) {
  return b - a;
});

function spliter(intArray, input) {
    var inputArray = [];

    for (var i = 0; i < intArray.length; i++) {
        var sub = input.substring(intArray[i]);
        input = input.substring(0, intArray[i]);
        inputArray.push(sub);
    }
    inputArray.push(input)
    return inputArray;

}

var inputArray = spliter(intArray, input);
inputArray = inputArray.reverse();
console.log(inputArray);

function showRecipe(inputArray) {
    var textContent = "";
    for (let i = 0; i < inputArray.length; i++) {
        let newWord = inputArray[i];
        for (let j = 0; j < keywords.length; j++) {
            if (inputArray[i].toLowerCase() == keywords[j][0]) {
                newWord = '<span onmouseover=\"popup(this, ' + j + ')\" onmouseout=\"popupOff()\">' + inputArray[i] + '</span>';
            }
       }
        textContent += newWord;
    }
    document.getElementById('recipe').innerHTML = textContent;
}

showRecipe(inputArray);

function popup(word, index) {
    console.log(word);
    var y = $(word).offset().top;
    var x = $(word).offset().left;
    $('#popup').css({'top':y-150, 'left':x, 'z-index':'99', 'opacity':'1'});
    document.getElementById('popupImage').src = keywords[index][1];
    
}

function popupOff() {
    $('#popup').css({'z-index':'-1', 'opacity':'0'});
}

function checkSelection(obj) {
    var selection = window.getSelection().toString();
    if (selection.replace(/\n+/g, '') != "") {
        searchImage(selection);
    }
    else {
        $('#popup').css({'z-index':'-1', 'opacity':'0'});
    }
}

function removeSelection() {
    $('#popup').css({'z-index':'-1', 'opacity':'0'});
}

function setImage(imgUrl) {
    var y = window.getSelection().getRangeAt(0).getBoundingClientRect().top;
    var x = window.getSelection().getRangeAt(0).getBoundingClientRect().left;
    document.getElementById('popupImage').src = imgUrl;
    $('#popup').css({'top':y-150, 'left':x, 'z-index':'99', 'opacity':'1'});
}
