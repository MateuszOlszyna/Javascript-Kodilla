// plik scripts.js

var a = prompt("Type variable a");
	b = prompt("Type variable b");
	value = (a*a) + (2*a*b) - (b*b);
if (value > 0) {
	alert ("Your result is positive!"); 
	console.log("Hello, your result is: " + value);}
else if (value < 0) {
	alert("Your result is negative!"); 
	console.log("Hello, your result is: " + value);}
else {
	alert("Bingo! Your result is: 0")
	console.log("Hello, your result is: " + value);}

