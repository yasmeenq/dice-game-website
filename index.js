// var dice1 = "./images/dice1.png";
// var dice2 = "./images/dice2.png";
// var dice3 = "./images/dice3.png";
// var dice4 = "./images/dice4.png";
// var dice5 = "./images/dice5.png";
// var dice6 = "./images/dice6.png";

// var group = [dice1, dice2, dice3, dice4, dice5, dice6];

// function getRandomIndex() {
//     return Math.floor(Math.random() * group.length);
//   }

// var n = getRandomIndex();
// var x = getRandomIndex();

// document.querySelector(".img1").src = group[n];
// document.querySelector(".img2").src = group[x];

function randomPic() {
  var randomNum = Math.floor(Math.random() * 6) + 1;
  var randomLink = "./images/dice" + randomNum + ".png";
  return randomLink;
}

var image1 = (document.querySelectorAll("img")[0].src = randomPic());
var image2 = (document.querySelectorAll("img")[1].src = randomPic());

function winner() {
  if (image1 > image2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
  } else if (image1 < image2) {
    document.querySelector("h1").textContent = "Player 2 wins!";
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
}
winner();
