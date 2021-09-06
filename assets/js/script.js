const cards = document.querySelectorAll(".playing-card");

let hasTurnedCard = false;
let freezeBoard = false;
let card1, card2;

function spinCard() {
    if (freezeBoard) return;
    if (this === card1) return;

    this.classList.add("spin");

    if (!hasTurnedCard) {
        //this is the first spin
        hasTurnedCard = true;
        card1 = this;

        return

    }   else {
        //this is the second spin
        card2 = this;

        matchCard();
    }
}

function matchCard() {
   //this is to check if both cards match
   if (card1.dataset.cardid === card2.dataset.cardid) {
    cardOff();
    }   else {
        spinBack();
        } 
}

function cardOff(){
    //if the cards are the same
    card1.removeEventListener("click", spinCard);
    card2.removeEventListener("click", spinCard);

    resetGameboard();
}

function spinBack() {
    //if the cards are not the same
  freezeBoard = true;
    setTimeout(() => {
    card1.classList.remove("spin");
    card2.classList.remove("spin");
    resetGameboard();
    }, 1250);   
}

function resetGameboard() {
    [hasTurnedCard, freezeBoard] = [false, false];
    [card1, card2] = [null, null];
}
cards.forEach(card => card.addEventListener("click", spinCard))