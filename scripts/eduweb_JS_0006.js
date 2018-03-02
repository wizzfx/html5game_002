//  functions
function sayHello() {
  console.log("Witaj");
}

sayHello();

var sayHello2 = function(){
  console.log("cześć");
};

var sayHello3 = function hello(){
  console.log("siema!");
}

function sayHello4(){
      return "Witaj ";
}

var hello = sayHello4();

console.log(hello + "Tomek");

// function with arrays

function makeArray(){

var arr = [1, 2, 3];

return arr;

}

function hi() {
  if(3<1) {
    return false;
  }

    console.log("cześć");
    return true;
}

// parametry funkcji

function square(num){
  return num * num;
}
console.log(square(2));

// --------

function sum(a, b){
  return a+b;
}
console.log(sum);

// --------

// var firstName = "Tomasz";
//
// function sayHello7(text) {
//      return "Witaj, " +text;
// }
//
// console.log(sayHello7(firstName));

// --------

var firstName = "Tomasz";
var person = {
    firstName: "Tomasz",
    lastName: "Kowalski"
}


function sayHello7(obj) {
     return "Witaj, " +obj.firstName + " " +obj.lastName;
}

console.log(sayHello7(person));



//
// zakres zmiennych
