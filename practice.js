let firstCard=parseInt(Math.random()*(13-1)+1);
let secondCard=parseInt(Math.random()*(13-1)+1);

console.log(firstCard+" "+secondCard);
let sum=firstCard+secondCard;
// console.log(sum);
let isAlive = true

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
}

console.log(isAlive)