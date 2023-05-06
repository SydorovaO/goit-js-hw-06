const fontSizeControlEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

fontSizeControlEl.addEventListener("input", onInputChange);

function onInputChange() {
  spanEl.style.fontSize = `${fontSizeControlEl.value}px`;
}
