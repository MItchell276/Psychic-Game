// @ts-check

var words = ['Al Davis', 'Terrell Davis', 'Brian Dawkins', 'Eric Dickerson', 'Mike Ditka', 'Tony Dorsett', 'Tony Dungy', 'Marshall Faulk', 'Brett Favre', 'Michael Irvin', 'Ray Lewis', 'Floyd Little', 'Randy Moss', 'Ozzie Newsome', 'Reggie White', 'Jim Brown', 'Vince Lombardi', 'Howie Long', 'Ronnie Lott', 'Lawrence Taylor', 'Derrick Thomas', 'Emmitt Thomas', 'Jerry Rice'];
// var images = ['https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/raiders/fg0jrpoyoqt1jeuxbort'];


let randNum = Math.floor(Math.random() * words.length);
let choosenWord = words[randNum];
var underscores = [];

console.log(choosenWord);

// var generateUnderscore = () => {
//     for (let i = 0; i < choosenWord.length; i++) {
//         underscores.push('_');
//     }
//     return underscores;
// }
// var answerArray = [];
// for (var i = 0; i < words.length; i++) {
//     answerArray[i] = "_";
// }
// var remainingLetters = words.length;
// // Main loop///


// while (remainingLetters > 0) {

//     alert(answerArray.join(" "));

//     var guess = prompt("guess a letter");

//     if (guess == null) {

//         break;
//     } else if (guess.length !== 1) {
//         alert("single letter.");

//     } else {
//         for (var l = 0; l < words.length; l++) {
//             if (words[l] === guess) {
//                 answerArray[l] = guess;
//                 remainingLetters--;

//             }
//         }
//     }
// }
// alert(answerArray.join(" "));

// alert("Good Job! answer = word");




// var wordArray = ['Al Davis', 'Terrell Davis', 'Brian Dawkins', 'Eric Dickerson', 'Mike Ditka', 'Tony Dorsett', 'Tony Dungy', 'Marshall Faulk', 'Brett Favre', 'Michael Irvin', 'Ray Lewis', 'Floyd Little', 'Randy Moss', 'Ozzie Newsome', 'Reggie White', 'Jim Brown', 'Vince Lombardi', 'Howie Long', 'Ronnie Lott', 'Lawrence Taylor', 'Derrick Thomas', 'Emmitt Thomas', 'Jerry Rice'];
// var videoArray = [];

// var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];

// var dashes = [];
// for (var i = 0; i < randomWord.length; i++) {
//     dashes.push("-");
// }
// document.onkeydown = function (event) {
//     for (var i = 0; i < randomWord.length; i++) {
//         if (event.key === randomWord[i]) {
//             dashes[i] = randomWord[i];
//         }
//     }
// }




















