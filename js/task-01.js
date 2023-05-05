const listEl = document.querySelector("#categories");
console.log(`Number of categories: ${listEl.children.length}`);

const listItemsEl = listEl.querySelectorAll(".item");

listItemsEl.forEach((element) => {
  const itemHeadingEl = element.querySelector("h2");
  const itemListEl = element.querySelector("ul");
  console.log(`Category: ${itemHeadingEl.textContent}`);
  console.log(`Elements: ${itemListEl.children.length}`);
});
