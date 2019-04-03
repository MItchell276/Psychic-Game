var guessremaining = 10;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var loses = 0;
var computerguess = null;

function getrandomletter() {
    computerguess = alphabet[Math.floor(Math.random() * alphabet.length)]
}
// this is how you get random number
getrandomletter()
console.log(computerguess)

document.onkeyup = function (events) {
    console.log(event.key)
    if (guessremaining > 0 && event.key === computerguess) {
        alert("YouWin");

    } else if (guessremaining <= 0) {
        alert("Loser")

    } else {
        guessremaining--;
        document.getElementsByClassName("GuessLeft")[0].innerHTML = guessremaining
        // update the number sequeace in code
        document.getElementsByClassName("Guessed")[0].prepend(event.key)

    }

}


