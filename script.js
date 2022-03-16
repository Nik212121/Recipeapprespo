//query selcetor

const recipeForm = document.querySelector('#recipe-form');
const recipeContainer = document.querySelector('#recipe-container');

let listItems = [];

//functions
function handleFormSubmit(e) {
    e.preventDefault();
    const name = recipeForm.querySelector('#name').value;
    const method = recipeForm.querySelector('#method').value;
    const roast = recipeForm.querySelector('#roast').value;
    const grind = recipeForm.querySelector('#grind').value;
    const ratio = recipeForm.querySelector('#ratio').value;
    const note = recipeForm.querySelector('#note').value;
    const newRecipe = {
        name,
        method,
        roast,
        grind,
        ratio,
        note,
        id: Date.now(),
    }
    console.log(newRecipe);

}
//envent listerns
recipeForm.addEventListener('submit', handleFormSubmit);