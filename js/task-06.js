const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const inputLenghtVal = event.currentTarget.value.length;
  const inputLenghtExpected = Number(inputEl.dataset.length);

  return inputLenghtVal === inputLenghtExpected
    ? inputEl.classList.add("valid") || inputEl.classList.remove("invalid")
    : inputEl.classList.add("invalid") || inputEl.classList.remove("valid");
}
