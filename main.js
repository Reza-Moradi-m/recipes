import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += `<span aria-hidden="true" class="${i <= rating ? 'icon-star' : 'icon-star-empty'}">${i <= rating ? '⭐' : '☆'}</span>`;
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <img src="${recipe.image}" alt="image of ${recipe.title}" />
        <figcaption>
            <ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2><a href="#">${recipe.title}</a></h2>
            <p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="recipe__description">
                ${recipe.description}
            </p>
        </figcaption>
    </figure>`;
}

function renderRecipes(recipeList) {
    const recipesContainer = document.querySelector('.recipes');
    const recipesHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    recipesContainer.innerHTML = recipesHTML;
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

function filterRecipes(query) {
    return recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query))
    ).sort((a, b) => a.title.localeCompare(b.title));
}

function searchHandler(e) {
    e.preventDefault();
    const query = document.getElementById('search').value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

document.getElementById('search-button').addEventListener('click', searchHandler);

init();
