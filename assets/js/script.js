/*jshint esversion: 6 */

const cards = document.querySelectorAll(".playing-card");

let hasTurnedCard = false;
let freezeBoard = false;
let card1, card2;
const watch = document.querySelector("#timer");
let millisecound = 0;
let timer;
let timerRunning = false;
let cardPairs = [
    "inkblot0", "inkblot1", "inkblot2", "inkblot3", "inkblot4", "inkblot5",
];

    //spins selected card around
function spinCard() {
    if (freezeBoard) return;
    if (this === card1) return;
    timeStart();
    this.classList.add("spin");

    if (!hasTurnedCard) {
        //this is the first spin
        hasTurnedCard = true;
        card1 = this;

        return;
    }   
        //this is the second spin
        card2 = this;

        matchCard();
    
}

function matchCard() {
   //this is to check if both cards match
   let ifMatch = card1.dataset.cardid === card2.dataset.cardid;
   
   //ternary script example from Adill Bashir
   ifMatch ? cardOff(card1.dataset.cardid) : spinBack();
}

function cardOff(id){
    //if the cards are the same
    card1.removeEventListener("click", spinCard);
    card2.removeEventListener("click", spinCard);
    resetGameboard();
    //Bim helped me with this to count cards down and not up
    const newCardset = cardPairs.filter((cardid) => cardid !== id);
    cardPairs = newCardset;
    console.log("new card set");
    if (newCardset.length <= 0) {
        timePaused();
    }
}

function spinBack() {
    //if the cards are not the same
  freezeBoard = true;

    //removes ability to spin cards once matched
    setTimeout(() => {
    card1.classList.remove("spin");
    card2.classList.remove("spin");

    resetGameboard();
    }, 1250);   
}

    //To prevent more then 2 cards being spun until either a match or not whilst allowing images to be seen by player
function resetGameboard() {
    [hasTurnedCard, freezeBoard] = [false, false];
    [card1, card2] = [null, null];
}

    //To make card placement random taken from free code camp
(function randomiseCards() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    });
})(); 

cards.forEach(card => card.addEventListener("click", spinCard));

    //Timer code attributed to dev.to website and adapted
function timeStart(){
    watch.style.color = "#04AA6D";
    if (timerRunning) {
        return;
    }
    clearInterval(timer);
    timer = setInterval(() => {
      millisecound += 10;
      let dateTimer = new Date(millisecound);

      watch.innerHTML = 
      ('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
      ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
      ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
      ('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);
    }, 10);
    timerRunning = true;
}

    //To freeze the timer if required
function timePaused() {
    watch.style.color = "red";
    clearInterval(timer);
    timerRunning = false;
  }
  document.addEventListener('click', (e) => {
    const el = e.target;

    if(el.id === 'start') timeStart();
    if(el.id === 'pause') timePaused();
  });