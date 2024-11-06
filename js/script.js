const ratingCard = document.querySelector(".rating-card");
const dialog = document.querySelector("dialog");

ratingCard.addEventListener("submit", (event) => {
  event.preventDefault();
  const selectedRating = document.querySelector("input[name='rating']:checked");
  const rating = selectedRating ? selectedRating.value : "";
  dialog.querySelector(".dialog__rating").textContent = rating;
  ratingCard.classList.add("hidden");
  dialog.classList.add("show");
  dialog.showModal();

  setTimeout(() => {
    ratingCard.classList.remove("hidden");
    dialog.classList.remove("show");
    dialog.close();
  }, 3000);
});
