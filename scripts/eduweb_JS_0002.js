//for in pętla

var person = {
   "imie": "Maciej",
   "nazwisko": "Kowalski",
   "wiek": 32
};

var person2 = {

};



for (var key in person) {
console.log(key +": " +person[key]);
}

//przypisanie objektow z person do person2

for (var key in person){
  person2[key] = person[key];
}
