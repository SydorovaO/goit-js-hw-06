const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", () => {
  return inputEl.value
    ? (outputEl.textContent = inputEl.value)
    : (outputEl.textContent = "Anonymous");
});
