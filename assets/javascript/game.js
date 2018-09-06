
var wins = 0;
var loses = 0;
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var wordBank = ["cat", "mouse", "frog", "horse", "dog", "crocodile", "snake", "pig", "rat", "cow", "bird", "fish", "shark", "kangaroo", "bull", "zebra", "hippopotamus", "deer", "moose", "monkey", "gorilla", "bear", "buffalo", "lion", "tiger", "wolf", "rhinoceros", "platypus", "unicorn", "godzilla"];


function game() {
    var remGuess = 10;
    var letGuess = [];
    var comWord = wordBank[(Math.floor(Math.random() * wordBank.length))];
    var comArray = comWord.split("");
    var display = [];
    console.log(comArray);

    for (var i = 0; i < comArray.length; i++) {
        display[i] = "-";
        document.getElementById("word").innerHTML = display.join(" ");
    }
    document.onkeyup = function (event) {
        var userGuess = event.key;
        letGuess.push(userGuess.toUpperCase());
        document.getElementById("letters-guessed").innerHTML = "Letters Guessed: " + letGuess.join(" ");
        console.log(userGuess);

        if (comArray.includes(userGuess)) {
            for (var j = 0; j < display.length; j++) {
                var userArray = []
                userArray[j] = userGuess
                if (userArray[j] === comArray[j]) {
                    display[j] = userGuess;
                    document.getElementById("word").innerHTML = display.join(" ");
                    if (comWord === display.join("")) {
                        wins++;
                        document.getElementById("wins").innerHTML = "Wins: " + wins;
                        document.getElementById("remaining-guesses").innerHTML = "Number of Guesses Remaining: 10"
                        document.getElementById("letters-guessed").innerHTML = "Letters Guessed: "
                        game();
                    }

                }
            }
        } else {
            remGuess--;
            document.getElementById("remaining-guesses").innerHTML = "Number of Guesses Remaining: " + remGuess;

        }
        if (remGuess < 1) {
            loses++;
            document.getElementById("loses").innerHTML = "Loses: " + loses;
            document.getElementById("remaining-guesses").innerHTML = "Number of Guesses Remaining: 10";
            document.getElementById("letters-guessed").innerHTML = "Letters Guessed: "

            game();
        }

    }

}

game();