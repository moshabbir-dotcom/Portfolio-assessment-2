const cards = document.querySelectorAll(".playing-card");

let hasTurnedCard = false;
let card1, card2;

function spinCard() {
    this.classList.add("spin");

    if (!hasTurnedCard) {
        //this is the first spin
        hasTurnedCard = true;
        card1 = this;
    }   else {
        //this is the second spin
        hasTurnedCard = false;
        card2 = this;

        //this is to check if both cards match
    }
}

cards.forEach(card => card.addEventListener("click", spinCard))