var firstName = 'Jan'; //string
var number = 20; // integer
var price = 20.5; // float

var xx = false; //boolean

if(xx) {
  console.log("Zalogowany");
} else {
  console.log("Nie Zalogowany");
}

var yourName = null; // null wartość pusta

var person = {
  name: null
};


var number1 = 2;
var number2 = 4;

var res1 = number1 + number2;

var res2 = 2 + "5"; // konkatenacja, sumowanie
var res5 = 5 * "asdf"; // Not a number

//operatory przypisania
//number2 = number2 + 2;
number2 +=2 // +=, -=, *=, /=, %=
// ----

if(firstName !== "") {
  console.log("cześć, " + firstName);
} else {
  console.log("brak danych");
}

// skrócony zapis instrukcji warunkowej IF

userName = firstName ? firstName : "Nieznajomy";
console.log("Witaj, " +userName);

// pętla while

while(number > 0) {
  console.log(number);
  number --;
}

var sectretNumber = 2;

/* ---

while (prompt("podaj liczbe od 1 do 10") != sectretNumber ){
  alert("nietrafione kretynie !");
}
  alert("Brawooo");

---*/

for(var i=0; i<=10; i++){  // i += 2 przeskakuje co dwa
  console.log(i);
}
