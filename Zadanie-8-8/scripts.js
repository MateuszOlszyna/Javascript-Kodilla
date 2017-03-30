// plik scripts.js

var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
	animal = "Zielone słonie";
	animalUpperCased = animal.toUpperCase();
	textSlonie = text.replace('Papugi', animalUpperCased);

console.log(textSlonie.length/2);

var partOftextSlonie = textSlonie.slice(0, 45);

console.log(partOftextSlonie);