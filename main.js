import {recipes} from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const recipesContainer = document.querySelector('.recipes');
   
    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
       
        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image;
        recipeImage.alt = recipe.title;
        recipeElement.appendChild(recipeImage);
       
        const recipeContent = document.createElement('div');
        recipeContent.classList.add('recipe-content');
       
        const recipeTitle = document.createElement('h2');
        recipeTitle.textContent = recipe.title;
        recipeContent.appendChild(recipeTitle);
       
        const recipeDescription = document.createElement('p');
        recipeDescription.textContent = recipe.description;
        recipeContent.appendChild(recipeDescription);
       
        const recipeRating = document.createElement('div');
        recipeRating.classList.add('rating');
        recipeRating.setAttribute('role', 'img');
        recipeRating.setAttribute('aria-label', `Rating: ${recipe.rating} out of 5 stars`);
       
        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.textContent = i < recipe.rating ? '⭐' : '☆';
            star.setAttribute('aria-hidden', 'true');
            recipeRating.appendChild(star);
        }
       
        recipeContent.appendChild(recipeRating);
        recipeElement.appendChild(recipeContent);
        recipesContainer.appendChild(recipeElement);
    });
});
