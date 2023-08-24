const form = document.querySelector("form");
const inputEmail = document.querySelector(".form-input");
const errorMessage = document.querySelector(".form-label-span");

const cardContainer = document.querySelector(".card-container");
const mockupContainer = document.querySelector(".mockup-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userInput = inputEmail.value;
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!userInput.match(mailFormat)) {
    errorHandling();
  } else {
    errorHandlingDelete();
    removeCardContainer();
    showMockup();
  }
});

function errorHandling() {
  inputEmail.classList.add("form-input-error--mod");
  errorMessage.classList.add("form-label-span-error--mod");
}

function errorHandlingDelete() {
  inputEmail.classList.remove("form-input-error--mod");
  errorMessage.classList.remove("form-label-span-error--mod");
}

function removeCardContainer() {
  cardContainer.style.display = "none";
}

function showMockup() {
  mockupContainer.classList.add("mockup-container--show");
}
