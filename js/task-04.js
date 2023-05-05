const counterEl = document.querySelector(".counter");
const valueSpanEl = document.querySelector("#value");
const incrementBtnEl = counter.querySelector('[data-action="increment"]');
const decrementBtnEl = counter.querySelector('[data-action="decrement"]');

let counterValue = 0;

incrementBtnEl.addEventListener("click", () => {
  counterValue += 1;
  valueSpanEl.textContent = counterValue;
});

decrementBtnEl.addEventListener("click", () => {
  counterValue -= 1;
  valueSpanEl.textContent = counterValue;
});
