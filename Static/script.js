
const recipes = [
    {name:"Egg Fried Rice",ingredients:["rice","egg","oil","salt"],category:"lunch",time:20,steps:["Cook the rice.","Scramble the egg in a pan.","Add rice and salt.","Mix well and serve."]},
    {name:"Vegetable Fried Rice",ingredients:["rice","vegetable","oil","salt"],category:"lunch",time:25,steps:["Cook the rice.","Chop the vegetables.","Cook vegetables in a pan.","Add rice and mix well."]},
    {name:"Egg Sandwich",ingredients:["bread","egg","salt"],category:"breakfast",time:10,steps:["Beat the egg with salt.","Cook the egg in a pan.","Place it between bread slices.","Serve."]},
    {name:"Cheese Sandwich",ingredients:["bread","cheese"],category:"breakfast",time:10,steps:["Place cheese between bread slices.","Toast until golden.","Cut and serve."]},
    {name:"Bread Toast",ingredients:["bread","butter"],category:"breakfast",time:5,steps:["Apply butter on bread.","Toast until golden brown.","Serve hot."]},
    {name:"Potato Fry",ingredients:["potato","oil","salt"],category:"lunch",time:20,steps:["Wash and cut the potatoes.","Heat oil in a pan.","Add potatoes and salt.","Cook until soft."]},
    {name:"Potato Onion Fry",ingredients:["potato","onion","oil"],category:"lunch",time:25,steps:["Cut potatoes and onion.","Heat oil in a pan.","Add both ingredients.","Cook until soft."]},
    {name:"Tomato Onion Salad",ingredients:["tomato","onion","salt"],category:"snacks",time:5,steps:["Wash the vegetables.","Cut tomato and onion.","Add salt and mix.","Serve fresh."]},
    {name:"Tomato Toast",ingredients:["bread","tomato"],category:"breakfast",time:10,steps:["Cut the tomato.","Place tomato on bread.","Toast lightly.","Serve."]},
    {name:"Banana Milkshake",ingredients:["banana","milk"],category:"dessert",time:5,steps:["Peel the banana.","Add banana and milk to a blender.","Blend until smooth.","Serve chilled."]},
    {name:"Banana Toast",ingredients:["banana","bread"],category:"breakfast",time:8,steps:["Toast the bread.","Cut the banana.","Place banana on toast.","Serve."]},
    {name:"Vegetable Noodles",ingredients:["noodles","vegetable"],category:"lunch",time:20,steps:["Boil the noodles.","Chop vegetables.","Cook vegetables in a pan.","Add noodles and mix."]},
    {name:"Egg Noodles",ingredients:["noodles","egg"],category:"lunch",time:20,steps:["Boil the noodles.","Scramble the egg.","Add noodles to the pan.","Mix and serve."]},
    {name:"Tomato Pasta",ingredients:["pasta","tomato"],category:"lunch",time:25,steps:["Boil the pasta.","Chop tomatoes.","Cook tomatoes in a pan.","Add pasta and mix."]},
    {name:"Cheese Pasta",ingredients:["pasta","cheese"],category:"lunch",time:20,steps:["Boil the pasta.","Drain the water.","Add cheese.","Mix until creamy."]},
    {name:"Corn Potato Chaat",ingredients:["corn","potato"],category:"snacks",time:15,steps:["Boil corn and potato.","Cut the potato.","Mix both ingredients.","Add seasoning and serve."]},
    {name:"Chickpea Salad",ingredients:["chickpeas","tomato","onion"],category:"snacks",time:10,steps:["Cook chickpeas until soft.","Chop tomato and onion.","Mix everything together.","Serve fresh."]},
    {name:"Dal Rice",ingredients:["dal","rice"],category:"lunch",time:30,steps:["Wash and cook rice.","Cook dal until soft.","Add salt and seasoning.","Serve together."]},
    {name:"Simple Dal",ingredients:["dal","salt"],category:"lunch",time:25,steps:["Wash the dal.","Cook it with water.","Add salt and seasoning.","Serve hot."]},
    {name:"Rice Pudding",ingredients:["rice","milk"],category:"dessert",time:30,steps:["Wash the rice.","Boil milk in a pan.","Add rice and cook until soft.","Stir and serve."]},
    {name:"Onion Omelette",ingredients:["egg","onion","salt"],category:"breakfast",time:10,steps:["Chop the onion.","Beat egg with onion and salt.","Cook in a pan until set.","Serve hot."]}
];

// LOAD SAVED DATA
function loadSavedData(key, fallback) {
    try {
        return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch (error) {
        return fallback;
    }
}

let favourites = loadSavedData("favouriteRecipes", []);
let shoppingItems = loadSavedData("shoppingItems", []);
let ratings = loadSavedData("recipeRatings", {});

// GENERATE RECIPE
function generateRecipe() {
    const input = document.getElementById("ingredients").value
        .toLowerCase().split(",").map(item => item.trim()).filter(Boolean);

    const result = document.getElementById("result");

    if (input.length === 0) {
        result.innerHTML = "<p>Please enter your ingredients.</p>";
        return;
    }

    const matched = recipes.filter(recipe =>
        recipe.ingredients.some(item => input.includes(item))
    );

    if (matched.length === 0) {
        result.innerHTML = "<h2>No Recipe Found</h2><p>Try different ingredients.</p>";
        return;
    }

    result.innerHTML = "<h2>Suggested Recipes</h2>";

    matched.forEach(recipe => {
        result.innerHTML += `
            <div class="recipe-card">
                <h3>${recipe.name}</h3>
                <p>Cooking Time: ${recipe.time} minutes</p>
                <p>Rating: ${getRatingText(recipe.name)}</p>
                <button type="button" onclick="showRecipeByName('${recipe.name}')">View Recipe</button>
            </div>`;
    });
}

// RATING DISPLAY
function getRatingText(name) {
    const rating = Number(ratings[name]) || 0;
    return rating ? "★".repeat(rating) + "☆".repeat(5 - rating) + ` (${rating}/5)` : "Not rated yet";
}

// SHOW RECIPE
function showRecipe(recipe) {
    const currentRating = Number(ratings[recipe.name]) || 0;

    document.getElementById("result").innerHTML = `
        <div class="recipe-card">
            <h2>${recipe.name}</h2>
            <p>Category: ${recipe.category}</p>
            <p>Cooking Time: ${recipe.time} minutes</p>
            <p>Ingredients: ${recipe.ingredients.join(", ")}</p>

            <h3>Cooking Steps</h3>
            <ol>${recipe.steps.map(step => `<li>${step}</li>`).join("")}</ol>

            <h3>Rate This Recipe</h3>
            <div class="rating-stars">
                ${[1,2,3,4,5].map(number => `
                    <button type="button"
                        class="star-button ${number <= currentRating ? "selected" : ""}"
                        onclick="setRating('${recipe.name}', ${number})"
                        aria-label="Rate ${number} out of 5 stars">
                        ★
                    </button>
                `).join("")}
            </div>

            <p id="ratingMessage">
                ${currentRating ? "Your rating: " + currentRating + "/5" : "Select a star to rate this recipe."}
            </p>

            <button type="button" onclick="toggleFavourite('${recipe.name}')">
                ${favourites.includes(recipe.name) ? "Remove Favourite" : "Add to Favourites"}
            </button>

            <button type="button" onclick="addToShoppingList('${recipe.name}')">
                Add Ingredients to Shopping List
            </button>
        </div>`;
}

// SAVE RATING
function setRating(name, value) {
    ratings[name] = value;
    localStorage.setItem("recipeRatings", JSON.stringify(ratings));

    const recipe = recipes.find(item => item.name === name);
    if (recipe) showRecipe(recipe);

    displayRecipes();
}

// VIEW RECIPE
function showRecipeByName(name) {
    const recipe = recipes.find(item => item.name === name);
    if (recipe) showRecipe(recipe);
}

// CLEAR RECIPE
function clearRecipe() {
    document.getElementById("ingredients").value = "";
    document.getElementById("result").innerHTML = "";
}

// SURPRISE ME
function randomRecipe() {
    const recipe = recipes[Math.floor(Math.random() * recipes.length)];
    showRecipe(recipe);
}

// DISPLAY RECIPES
function displayRecipes() {
    const search = document.getElementById("recipeSearch").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
    const list = document.getElementById("recipeList");

    const filtered = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(search) &&
        (category === "all" || recipe.category === category)
    );

    list.innerHTML = "";

    if (filtered.length === 0) {
        list.innerHTML = "<p>No recipes found.</p>";
        return;
    }

    filtered.forEach(recipe => {
        list.innerHTML += `
            <div class="recipe-card">
                <h3>${recipe.name}</h3>
                <p>Cooking Time: ${recipe.time} minutes</p>
                <p>Category: ${recipe.category}</p>
                <p class="rating-summary">${getRatingText(recipe.name)}</p>
                <button type="button" onclick="showRecipeByName('${recipe.name}')">View Recipe</button>
                <button type="button" onclick="toggleFavourite('${recipe.name}')">
                    ${favourites.includes(recipe.name) ? "Remove Favourite" : "Add to Favourites"}
                </button>
                <button type="button" onclick="addToShoppingList('${recipe.name}')">Add to Shopping List</button>
            </div>`;
    });
}

// FAVOURITES
function saveFavourites() {
    localStorage.setItem("favouriteRecipes", JSON.stringify(favourites));
}

function toggleFavourite(name) {
    if (favourites.includes(name)) {
        favourites = favourites.filter(item => item !== name);
    } else {
        favourites.push(name);
    }

    saveFavourites();
    displayFavourites();
    displayRecipes();

    const recipe = recipes.find(item => item.name === name);
    if (recipe) showRecipe(recipe);
}

function displayFavourites() {
    const list = document.getElementById("favouriteList");
    list.innerHTML = "";

    if (favourites.length === 0) {
        list.innerHTML = "<p>No favourite recipes added yet.</p>";
        return;
    }

    favourites.forEach(name => {
        const recipe = recipes.find(item => item.name === name);
        if (!recipe) return;

        list.innerHTML += `
            <div class="recipe-card">
                <h3>${recipe.name}</h3>
                <p>Cooking Time: ${recipe.time} minutes</p>
                <p>${getRatingText(recipe.name)}</p>
                <button type="button" onclick="showRecipeByName('${recipe.name}')">View Recipe</button>
                <button type="button" onclick="toggleFavourite('${recipe.name}')">Remove Favourite</button>
            </div>`;
    });
}

// SHOPPING LIST
function saveShoppingList() {
    localStorage.setItem("shoppingItems", JSON.stringify(shoppingItems));
}

function addToShoppingList(name) {
    const recipe = recipes.find(item => item.name === name);
    if (!recipe) return;

    recipe.ingredients.forEach(ingredient => {
        if (!shoppingItems.some(item => item.name === ingredient)) {
            shoppingItems.push({name: ingredient, checked: false});
        }
    });

    saveShoppingList();
    displayShoppingList();
    document.getElementById("shopping").scrollIntoView({behavior:"smooth"});
}

function displayShoppingList() {
    const list = document.getElementById("shoppingList");
    list.innerHTML = "";

    if (shoppingItems.length === 0) {
        list.innerHTML = "<p>Your shopping list is empty.</p>";
        return;
    }

    shoppingItems.forEach((item, index) => {
        const row = document.createElement("div");
        row.className = "shopping-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = item.checked;

        checkbox.addEventListener("change", function() {
            shoppingItems[index].checked = checkbox.checked;
            saveShoppingList();
            displayShoppingList();
        });

        const label = document.createElement("span");
        label.textContent = item.name;
        if (item.checked) label.classList.add("checked-item");

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.type = "button";
        removeButton.addEventListener("click", function() {
            shoppingItems.splice(index, 1);
            saveShoppingList();
            displayShoppingList();
        });

        row.append(checkbox, label, removeButton);
        list.appendChild(row);
    });
}

function clearShoppingList() {
    shoppingItems = [];
    saveShoppingList();
    displayShoppingList();
}

// COOKING TIMER
let timerInterval = null;
let remainingSeconds = 0;

function updateTimerDisplay() {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    document.getElementById("timerDisplay").textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

function startTimer() {
    if (timerInterval !== null) return;

    if (remainingSeconds <= 0) {
        const minutes = Number(document.getElementById("timerMinutes").value);

        if (!Number.isInteger(minutes) || minutes < 1) {
            document.getElementById("timerMessage").textContent =
                "Please enter at least 1 minute.";
            return;
        }

        remainingSeconds = minutes * 60;
    }

    document.getElementById("timerMessage").textContent = "Timer is running.";
    updateTimerDisplay();

    timerInterval = setInterval(function() {
        remainingSeconds--;
        updateTimerDisplay();

        if (remainingSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            remainingSeconds = 0;
            document.getElementById("timerMessage").textContent =
                "Time is up! Your cooking timer is complete.";
        }
    }, 1000);
}

function pauseTimer() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
        document.getElementById("timerMessage").textContent = "Timer paused.";
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    remainingSeconds = 0;
    document.getElementById("timerMinutes").value = "";
    document.getElementById("timerMessage").textContent = "";
    updateTimerDisplay();
}

// INITIALIZE WEBSITE
document.addEventListener("DOMContentLoaded", function() {
    displayRecipes();
    displayFavourites();
    displayShoppingList();

    document.getElementById("recipeSearch").addEventListener("input", displayRecipes);
    document.getElementById("categoryFilter").addEventListener("change", displayRecipes);

    updateTimerDisplay();
});
