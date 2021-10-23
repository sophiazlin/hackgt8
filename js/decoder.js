const keywords = ["soft peaks", "stiff peaks", "sift", "fold"];
//var input = sessionStorage.getItem('input');
var input = "In a separate large bowl, beat the egg whites and the remaining 1/2 teaspoon of salt with an electric hand mixer until soft peaks form. Gradually add the granulated sugar until fully incorporated. Continue to beat until stiff peaks form (you should be able to turn the bowl upside down without anything falling out)."

function decoder(input) {
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
            if (inputArray[i] == keywords[j]) {
                newWord = '<span onmouseover=\"alert(\'' + keywords[j] + '\');\">' + inputArray[i] + '</span>';
            }
        }
        textContent += newWord;
    }
    
    document.getElementById('recipe').innerHTML = textContent;
}

showRecipe(inputArray);