//for player 1

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
var finalrandomnumber1 = Math.floor(randomNumber1 + 1);

var randomdiceimgfor1 = "dice"+finalrandomnumber1+".png"; //'dice1.png'

// var dicesrcimage1 = "images/" +  randomdiceimgfor1; // 'images/dice5.png' for example

document.querySelector("img")[0].setAttribute("src", randomdiceimgfor1);//adds the image

//for player 2

var randomnumber2 = Math.random();
randomnumber2 = randomnumber2 * 6;
var finalrandomnumber2 =  Math.floor(randomnumber2 + 1);

var randomdiceimgfor2 = "dice"+finalrandomnumber2+".png"; //dice6.png

// var dicesrcimage2 =  "images/"+ randomdiceimgfor2; // 'images/dice1.png' for example

document.querySelector("img")[1].setAttribute("src", randomdiceimgfor2);

//results

if (finalrandomnumber1 > finalrandomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (finalrandomnumber1 < finalrandomnumber2) {
    document.querySelector("h1").innerHTML = "player 2 wins";
}
else{
    document.querySelector("h1").innerHTML= "Draw";
}