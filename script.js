var oceny = [5,3,1];
var cars = ["Volvo", "BMW", "Skoda"];

var suma = 0;
var srednia = 0;

for (i=0; i < oceny.length; i++) {
    suma += oceny[i];
}

srednia = suma/oceny.length;

document.getElementById("output").innerHTML = srednia;