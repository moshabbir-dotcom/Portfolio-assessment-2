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

        matchCard();
    }
}

function matchCard() {
   //this is to check if both cards match
   if (card1.dataset.cardid === card2.dataset.cardid) {
    //if the cards are the same
    card1.removeEventListener("click", spinCard);
    card2.removeEventListener("click", spinCard);
}   else {
    //if the cards are not the same
    setTimeout(() => {
    card1.classList.remove("spin");
    card2.classList.remove("spin");
}, 1250);
} 
}
cards.forEach(card => card.addEventListener("click", spinCard))