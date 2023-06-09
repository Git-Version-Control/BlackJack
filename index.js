let hasBlackJack = false
let isAlive = false
let message = ""
let sum=0

let cards=[];
let cardEl=document.getElementById("cards-el");
let player={
    playerName:"Chaithra",
    playerCredit:125
}
// let playerName="Chaithra"
// let playerCredit=125
let perEl=document.getElementById("player-el");
// perEl.textContent=playerName+": $"+playerCredit
perEl.textContent=player.playerName+": $"+player.playerCredit;
function getRandomCard(){
    // if 1     -> return 11
    // if 11-13 -> return 10
    let random=(Math.floor( Math.random()*13 ) + 1);
    if(random===1){
        return 11;
    }
    else if(random>=11){
        return 10;
    }
    return random;
}
function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards=[firstCard,secondCard]; 
    isAlive=true
    renderGame();
}
function renderGame(){
    // document.getElementById("cards-el").textContent="Cards:"+[...cards];
    cardEl.textContent="Cards:"; 
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+" ";
    }
    document.querySelector("#sum-el").textContent="Sum:"+sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    document.getElementById("message-el").textContent=message;
}

function newCard(){
    if(isAlive && hasBlackJack===false){
        let card=getRandomCard()
        sum+=card;
        cards.push(card)
        renderGame();
    }
    
}