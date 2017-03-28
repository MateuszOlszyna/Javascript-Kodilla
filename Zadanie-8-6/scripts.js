// plik scripts.js

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(8, 9);
var triangle3Area = getTriangleArea(1, 2);
var triangle4Area = getTriangleArea(-1, 2);
var triangle5Area = getTriangleArea(1, -2);

function getTriangleArea(a, h) {

	if ((a > 0 ) && (h > 0)) {}
	else {console.log ("incorrect data");}

return (a*h/2);

}

console.log ( triangle2Area );
console.log ( triangle3Area );
console.log ( triangle1Area );
console.log ( triangle4Area );
console.log ( triangle5Area );