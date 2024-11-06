const ratingCard = document.querySelector(".rating-card");
const dialog = document.querySelector("dialog");

function showThankYouDialog(rating) {
  dialog.querySelector(".dialog__rating").textContent = rating;
  ratingCard.classList.add("hidden");
  dialog.classList.add("show");
  dialog.showModal();
}

function hideThankYouDialog() {
  ratingCard.classList.remove("hidden");
  dialog.classList.remove("show");
  dialog.close();
}

ratingCard.addEventListener("submit", (event) => {
  event.preventDefault();
  const selectedRating = document.querySelector("input[name='rating']:checked");
  if (selectedRating) {
    const rating = selectedRating.value;
    showThankYouDialog(rating);
    setTimeout(hideThankYouDialog, 3000);
  } else {
    alert("Please select a rating before submitting.");
  }
});
