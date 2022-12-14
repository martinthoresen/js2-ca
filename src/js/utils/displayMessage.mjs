export function displayMessage(target, message) {
  message = "";

  const errorMessage = document.createElement("p");
  target.appendChild(errorMessage);

  errorMessage.classList = "text-danger ";
  errorMessage.innerHTML = message;
}
