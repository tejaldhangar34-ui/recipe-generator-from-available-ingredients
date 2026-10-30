        function generateRecipe() {
    let ingredients = document.getElementById("ingredients").value.toLowerCase().trim();
    let result = document.getElementById("result");

    if (ingredients === "") {
        result.innerHTML = `
            <h2>Please enter some ingredients</h2>
            <p>Enter the ingredients you have at home.</p>
        `;
        return;
    }

    if (ingredients.includes("rice") && ingredients.includes("egg")) {
        result.innerHTML = `
            <h2>Egg Fried Rice</h2>
            <p><b>Ingredients:</b> Rice, Egg, Oil, Salt</p>
            <p><b>Steps:</b> Cook rice, scramble the egg, add rice and mix well. Add salt and serve.</p>
        `;
    }

    else if (ingredients.includes("rice") && ingredients.includes("vegetable")) {
        result.innerHTML = `
            <h2>Vegetable Fried Rice</h2>
            <p><b>Ingredients:</b> Rice, Vegetables, Oil, Salt</p>
            <p><b>Steps:</b> Cook vegetables, add cooked rice, mix well and season with salt.</p>
        `;
    }

    else if (ingredients.includes("bread") && ingredients.includes("egg")) {
        result.innerHTML = `
            <h2>Egg Sandwich</h2>
            <p><b>Ingredients:</b> Bread, Egg, Salt</p>
            <p><b>Steps:</b> Cook the egg and place it between two bread slices.</p>
        `;
    }

    else if (ingredients.includes("bread") && ingredients.includes("cheese")) {
        result.innerHTML = `
            <h2>Cheese Sandwich</h2>
            <p><b>Ingredients:</b> Bread, Cheese, Butter</p>
            <p><b>Steps:</b> Place cheese between bread slices, apply butter and toast until golden.</p>
        `;
    }

    else if (ingredients.includes("bread")) {
        result.innerHTML = `
            <h2>Bread Toast</h2>
            <p><b>Ingredients:</b> Bread, Butter, Salt</p>
            <p><b>Steps:</b> Apply butter to bread and toast until lightly golden.</p>
        `;
    }

    else if (ingredients.includes("potato") && ingredients.includes("onion")) {
        result.innerHTML = `
            <h2>Potato Onion Fry</h2>
            <p><b>Ingredients:</b> Potato, Onion, Oil, Salt</p>
            <p><b>Steps:</b> Fry onion, add potatoes and cook until soft. Add salt and serve.</p>
        `;
    }

    else if (ingredients.includes("potato")) {
        result.innerHTML = `
            <h2>Potato Fry</h2>
            <p><b>Ingredients:</b> Potato, Oil, Salt</p>
            <p><b>Steps:</b> Cut potatoes, fry them in oil and add salt.</p>
        `;
    }

    else if (ingredients.includes("tomato") && ingredients.includes("onion")) {
        result.innerHTML = `
            <h2>Tomato Onion Salad</h2>
            <p><b>Ingredients:</b> Tomato, Onion, Salt</p>
            <p><b>Steps:</b> Chop tomato and onion, mix them and add salt.</p>
        `;
    }

    else if (ingredients.includes("tomato") && ingredients.includes("bread")) {
        result.innerHTML = `
            <h2>Tomato Toast</h2>
            <p><b>Ingredients:</b> Bread, Tomato, Salt</p>
            <p><b>Steps:</b> Place sliced tomato on bread, season and toast lightly.</p>
        `;
    }

    else if (ingredients.includes("banana") && ingredients.includes("milk")) {
        result.innerHTML = `
            <h2>Banana Milkshake</h2>
            <p><b>Ingredients:</b> Banana, Milk, Sugar</p>
            <p><b>Steps:</b> Blend banana and milk together. Add sugar if required and serve chilled.</p>
        `;
    }

    else if (ingredients.includes("banana") && ingredients.includes("bread")) {
        result.innerHTML = `
            <h2>Banana Toast</h2>
            <p><b>Ingredients:</b> Bread, Banana, Butter</p>
            <p><b>Steps:</b> Toast the bread, add sliced banana and serve.</p>
        `;
    }

    else if (ingredients.includes("noodle") && ingredients.includes("vegetable")) {
        result.innerHTML = `
            <h2>Vegetable Noodles</h2>
            <p><b>Ingredients:</b> Noodles, Vegetables, Oil, Salt</p>
            <p><b>Steps:</b> Cook noodles, stir-fry vegetables and mix everything together.</p>
        `;
    }

    else if (ingredients.includes("noodle") && ingredients.includes("egg")) {
        result.innerHTML = `
            <h2>Egg Noodles</h2>
            <p><b>Ingredients:</b> Noodles, Egg, Oil, Salt</p>
            <p><b>Steps:</b> Cook noodles, scramble the egg and mix them together.</p>
        `;
    }

    else if (ingredients.includes("pasta") && ingredients.includes("tomato")) {
        result.innerHTML = `
            <h2>Tomato Pasta</h2>
            <p><b>Ingredients:</b> Pasta, Tomato, Oil, Salt</p>
            <p><b>Steps:</b> Cook pasta and prepare a simple tomato sauce. Mix and serve.</p>
        `;
    }

    else if (ingredients.includes("pasta") && ingredients.includes("cheese")) {
        result.innerHTML = `
            <h2>Cheese Pasta</h2>
            <p><b>Ingredients:</b> Pasta, Cheese, Milk, Salt</p>
            <p><b>Steps:</b> Cook pasta, add cheese and milk, mix well and serve.</p>
        `;
    }

    else if (ingredients.includes("corn") && ingredients.includes("potato")) {
        result.innerHTML = `
            <h2>Corn Potato Chaat</h2>
            <p><b>Ingredients:</b> Corn, Potato, Salt, Lemon</p>
            <p><b>Steps:</b> Boil corn and potato, mix them together and add salt and lemon.</p>
        `;
    }

    else if (ingredients.includes("chickpea") || ingredients.includes("chana")) {
        result.innerHTML = `
            <h2>Chickpea Salad</h2>
            <p><b>Ingredients:</b> Chickpeas, Tomato, Onion, Salt</p>
            <p><b>Steps:</b> Mix boiled chickpeas with chopped tomato and onion. Add salt and serve.</p>
        `;
    }

    else if (ingredients.includes("dal") && ingredients.includes("rice")) {
        result.innerHTML = `
            <h2>Dal Rice</h2>
            <p><b>Ingredients:</b> Dal, Rice, Salt, Oil</p>
            <p><b>Steps:</b> Cook rice and dal separately. Season the dal and serve together.</p>
        `;
    }

    else if (ingredients.includes("dal")) {
        result.innerHTML = `
            <h2>Simple Dal</h2>
            <p><b>Ingredients:</b> Dal, Salt, Oil, Water</p>
            <p><b>Steps:</b> Cook dal with water and salt. Add a simple oil tempering and serve.</p>
        `;
    }

    else if (ingredients.includes("milk") && ingredients.includes("rice")) {
        result.innerHTML = `
            <h2>Rice Pudding</h2>
            <p><b>Ingredients:</b> Rice, Milk, Sugar</p>
            <p><b>Steps:</b> Cook rice in milk until soft. Add sugar and serve warm.</p>
        `;
    }

    else if (ingredients.includes("egg") && ingredients.includes("onion")) {
        result.innerHTML = `
            <h2>Onion Omelette</h2>
            <p><b>Ingredients:</b> Egg, Onion, Salt, Oil</p>
            <p><b>Steps:</b> Beat eggs, add chopped onion and salt. Cook on a pan until done.</p>
        `;
    }

    else if (ingredients.includes("milk") && ingredients.includes("banana")) {
        result.innerHTML = `
            <h2>Banana Milkshake</h2>
            <p><b>Ingredients:</b> Banana, Milk, Sugar</p>
            <p><b>Steps:</b> Blend banana with milk and sugar until smooth.</p>
        `;
    }

    else {
        result.innerHTML = `
            <h2>No Recipe Found</h2>
            <p>Sorry, we could not find a recipe for these ingredients.</p>
            <p><b>Try:</b> rice, egg, bread, potato, vegetable, pasta, noodles, tomato, banana, milk, dal or onion.</p>
        `;
    }
}


function clearRecipe() {
    document.getElementById("ingredients").value = "";
    document.getElementById("result").innerHTML = "";
}
