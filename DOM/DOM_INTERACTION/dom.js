
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
 }
  return color;
}



function changeColor() {
var elemental = document.getElementById("pickme")
elemental.style.color = getRandomColor()
}

setInterval("changeColor()",1000);
