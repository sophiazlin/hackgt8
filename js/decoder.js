function showRecipe(input) {
    console.log(input)
    console.log(document)
    let recipe = document.getElementById("recipe")
    recipe.innerText = input;
}

var input = sessionStorage.getItem('input');
showRecipe(input);