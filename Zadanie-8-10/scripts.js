// plik scripts.js

var buttons = document.getElementsByClassName ("button");

 function alertButtons () {
 for (var i = 0; i < buttons.length; i++) {
  alert(buttons[i].innerHTML)

 }
 }
alertButtons();