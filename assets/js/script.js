const cards = document.querySelectorAll(".playing-card");

let hasTurnedCard = false;
let freezeBoard = false;
let card1, card2;
const watch = document.querySelector("#stopwatch");
let millisecound = 0;
let timer;

function spinCard() {
    if (freezeBoard) return;
    if (this === card1) return;

    this.classList.add("spin");

    if (!hasTurnedCard) {
        //this is the first spin
        hasTurnedCard = true;
        card1 = this;

        return
    }   
        //this is the second spin
        card2 = this;

        matchCard();
    
}

function matchCard() {
   //this is to check if both cards match
   let ifMatch = card1.dataset.cardid === card2.dataset.cardid;
   
   ifMatch ? cardOff() : spinBack();
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

(function randomiseCards() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    });
})(); 

cards.forEach(card => card.addEventListener("click", spinCard))

function timeStart(){
    watch.style.color = "#0f62fe";
    clearInterval(timer);
    timer = setInterval(() => {
      millisecound += 10;
    }
}