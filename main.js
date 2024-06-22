const recipes = [
    
    {
        title: "Chicken Curry",
        description: "A spicy and flavorful curry...",
        image: "images/chicken-curry.webp",
        rating: 5
    },
    {
        title: "Apple Crisp",
        description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
        image: "images/apple-crisp.jpg",
        rating: 4
    },
    {
        title: "Black Beans and Rice",
        description: "A simple and healthy dish...",
        image: "images/black-beans-and-rice.jpg",
        rating: 4
    },
    {
        title: "Chocolate Chip Cookies",
        description: "Classic chocolate chip cookies...",
        image: "images/chocolate-chip-cookies.jpg",
        rating: 5
    },
    {
        title: "Escalopes de Poulet à la Crème",
        description: "A creamy chicken dish...",
        image: "images/escalopes-de-poulet-a-la-creme.webp",
        rating: 5
    },
    {
        title: "German Gooseberry Cake",
        description: "A sweet and tangy cake...",
        image: "images/german-gooseberry-cake.jpg",
        rating: 4
    },
    {
        title: "Roasted Potatoes",
        description: "Crispy and delicious roasted potatoes...",
        image: "images/roasted-potatoes.webp",
        rating: 5
    },
    {
        title: "Sweet Potato Waffle",
        description: "A delightful sweet potato waffle...",
        image: "images/sweet-potato_waffle-md.jpg",
        rating: 4
    }
];


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
