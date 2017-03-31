// plik scripts.js

function rysujChoinke(n) {
	for ( var k = 1 ; k < n; k++) {
		var star = '';
			for (s = k; s < n-1; s++) { star = star.concat(" "); }

			for ( var j = 0 ; j < k*2-1; j++) {
				star = star.concat("*");
			}
			console.log(star);
	}
	
}


rysujChoinke(15);