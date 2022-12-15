export function toggleSpinner(posts) {
  const toggleSpinner = document.querySelector("#spinner");

  if (posts) {
    toggleSpinner.classList.add("d-none");
  } else {
    toggleSpinner.classList.remove("d-none");
  }
}
