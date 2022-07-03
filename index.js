
document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);

var randomDice1 = "images/dice" + randomNumber1 + ".png";
console.log(randomDice1);

document.querySelectorAll("img")[0].setAttribute("src", randomDice1);