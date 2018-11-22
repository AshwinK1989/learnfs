var headone = document.getElementById("one")
var headtwo = document.querySelector("#two")
var headthree = document.querySelector("#three")

// Event Listener for Mouse Over
headone.addEventListener('mouseover',function() {
  headone.textContent = "Hovered on Me";
  headone.style.color = "blue";

})

// Event Listener for Mouse out
headone.addEventListener('mouseout',function() {
  headone.textContent = "Hover On ME";
  headone.style.color = "black";

})

// Event Listener for Click
headtwo.addEventListener('click',function() {
  headtwo.textContent = "Clicked";
  headtwo.style.color = "Violet";

})

// Event Listener for Double Click
headthree.addEventListener('dblclick',function() {
  headthree.textContent = "Double Clicked";
  headthree.style.color = "Red";

})
