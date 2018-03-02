// sortowanie elementów tablicy

var arr = [5, 8, 1, 2, 1, 33 ,23 , 18, 4];
    arr2= ["anita","Tomek","Ania","Andrzej","Mateusz","Kasia"];

console.log(arr);

//arr.sort(function(a, b){

 //return a-b;

  //   if ( a < b ){
  //   return -1;
  // } else if (a > b){
  //     return 1;
  // } else {
  //   return 0;
  // }



//});

console.log(arr);
console.log(arr2);

arr2.sort(function(a, b){

if (a<b){
   return -1;
 } else if (a > b){
     return 1;
 } else {
   return 0;
 }

});

console.log(arr2);

// iterowanie po elementach tablicy

var arr7 = [5, 8, 1, 2, 1, 33 ,23 , 18, 4];

text = "wylosowane liczby to: ";
var arrLength = arr7.length;

for(var i=0; i < arrLength; i++){

  text += arr7[i];
  if (i !== arrLength - 1){
    text += ", ";
  }

}

console.log(text);

// iterowanie po zagnieżdżonych elementach tablicy

var arr8 = [["Tomasz","Kowalski", 23], ["Maria", "Nowak", 30], ["Jacek","Zieliński", 38]];

for (var i=0; i < arr8.length; i++) {

  console.log("Dane");

  for(var j = 0; j < arr8[i].length; j++) {
    console.log(arr8[i][j]);
  }

  console.log("--------");
}




// usuwanie lub sklejanie elementow tablicy

var arr3 = [5, 8, 1, 2, 1, 33 ,23 , 18, 4];

var half=arr3.slice(-4);
console.log(arr3);
console.log(half);

console.log(arr3.join("--"));   //  console.log(arr3.join(""));

// wyszukiwanie w tablicach ( zwraca numer komórki tablicy ) ( jeśli nie znajdzie to zwraca -1 )

console.log(arr3.indexOf(8));
console.log(arr3.indexOf(33) !== -1 );

console.log(arr3.concat(half));   // dołonaczona tablica arr3 + tablica half

// for Each

var arr4 = [8, 22, 90, 2, 1, 11 ,0 , 18, 4];

arr.forEach(function(value, index, array){
  console.log(value, index);
})

// zapisanie do innej tablicy danych elementów ( wiekszych od 10 )

var arr5 = [8, 22, 90, 2, 1, 11 ,0 , 18, 4];

var gt10 = arr.filter(function(value){
  return value > 10;
});
