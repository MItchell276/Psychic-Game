const name = ['Al Davis', 'Terrell Davis', 'Brian Dawkins', 'Eric Dickerson', 'Mike Ditka', 'Tony Dorsett', 'Tony Dungy', 'Marshall Faulk', 'Brett Favre', 'Michael Irvin', 'Ray Lewis', 'Floyd Little', 'Randy Moss', 'Ozzie Newsome', 'Reggie White', 'Jim Brown', 'Vince Lombardi', 'Howie Long', 'Ronnie Lott', 'Lawrence Taylor', 'Derrick Thomas', 'Emmitt Thomas', 'Jerry Rice'];

let randNum = Math.floor(Math.random() * name.length);
let choosenWord = name[randNum];
console.log(choosenWord);