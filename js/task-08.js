const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const{elements:{email,password}} = event.curentTarget;

//   if(email.value)
// }
