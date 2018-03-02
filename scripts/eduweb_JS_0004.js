//objekty w JS


var person = {
  firstName: "Tomasz",
  lastName: "Kowalski",
  age: 32
};

var personX = {
  firstName: "Tomasz",
  lastName: "Kowalski",
  age: 32,
  sayHello: function() {
    console.log("cześć mam na imię " + this.firstName);
  },
  setFirstName: function(firstName){
    this.firstName = firstName;
  },
}

//tablice - arrays

var numbers = [1, 3, 4, 5];

console.log(numbers[2]);
console.log(numbers.length);

var things = [{firstName: "Anna"}, 2, 2+8];

var arrays = [[2, 3, 4], [4, 2, 1, ["Jan"]]];

// przypisywanie do tablicy

var arr = [];

arr[0] = 'Kasia';
arr[1] = 'Tomek';

arr.push('Monika');
arr.unshift('Patryk');

// usuwanie z tablicy

//   arr.length = 2;
//   delete arr[2];
//   arr.pop();
var last = arr.pop();
var first = arr.shift();

arr.splice(0, 1); // usuwamy od danego elementu danom ilość komórek tablicy

console.log(arr.length);
