const form = document.querySelector("form");
const inputEmail = document.querySelector(".form-input");
const errorMessage = document.querySelector(".form-label-span");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

function formValidation() {
  const userInput = inputEmail.value;
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!userInput.match(mailFormat)) {
    inputEmail.classList.add("form-input-error--mod");
    errorMessage.classList.add("form-label-span-error--mod");
  } else {
    inputEmail.classList.remove("form-input-error--mod");
    errorMessage.classList.remove("form-label-span-error--mod");
  }
}
