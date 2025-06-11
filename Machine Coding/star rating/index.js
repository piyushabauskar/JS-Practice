const stars = document.querySelectorAll(".star-rating .star");
const ratingValue = document.getElementById("rating-value");
let selectedRating = 0;
stars.forEach((star, idx) => {
  star.addEventListener("mouseover", () => {
    highlightStars(idx);
  });
  star.addEventListener("mouseleave", () => {
    resetStars();
    highlightStars(selectedRating - 1);
  });
  star.addEventListener("click", () => {
    selectedRating = idx + 1;
    setRating(selectedRating);
  });
});

function highlightStars(index) {
  resetStars();
  for (let i = 0; i <= index; i++) {
    stars[i].classList.add("highlighted");
  }
}

function resetStars() {
  stars.forEach((star) => star.classList.remove("highlighted"));
}

function setRating(rating) {
  highlightStars(selectedRating - 1);
  ratingValue.textContent = `Your rating : ${rating}`;
}
