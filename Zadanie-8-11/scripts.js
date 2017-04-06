// plik scripts.js

var list = document.getElementById("list");
	add  = document.getElementById("addElem");
	

add.addEventListener('click', function() {

	var number = document.getElementsByTagName("li")
	list.innerHTML += "<li>item</li>" + number.length
}); 

