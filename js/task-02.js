const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const createIngredientsItemsEl = (ingredients) => {
  return ingredients.map((ingredient) => {
    const ingredientsItemEl = document.createElement("li");
    ingredientsItemEl.textContent = ingredient;
    ingredientsItemEl.classList.add("item");

    return ingredientsItemEl;
  });
};

const elements = createIngredientsItemsEl(ingredients);

ingredientsListEl.append(...elements);
