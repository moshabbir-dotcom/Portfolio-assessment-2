const cards = document.querySelectorAll(".playing-card");

function spinCard() {
    this.classList.toggle("spin");
}

cards.forEach(card => card.addEventListener("click", spinCard))