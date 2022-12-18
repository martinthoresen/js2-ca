export function displayMessage(target, message, type) {
  // const errorMessage = document.createElement("p");
  target.innerHTML = message;
  target.classList.add(`text-${type}`);
  //  errorMessage.classList = "text-danger ";
  // errorMessage.innerHTML = message;
}
