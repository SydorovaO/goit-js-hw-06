function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputEl: document.querySelector("input"),
  createBtnEl: document.querySelector("[data-create]"),
  destroyBtnEl: document.querySelector("[data-destroy]"),
  boxesDivEl: document.querySelector("#boxes"),
};

refs.createBtnEl.addEventListener("click", () => {
  createBoxes(refs.inputEl.value);
});
refs.destroyBtnEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let boxWidth = 30;
  let boxHeight = 30;
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    boxWidth += 10;
    boxHeight += 10;
  }
  refs.boxesDivEl.append(...boxes);
}

function destroyBoxes() {
  refs.boxesDivEl.innerHTML = "";
}
