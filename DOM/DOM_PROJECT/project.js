var ele = document.getElementById("parent")
var btn = document.querySelector("button[type='button']")
ele.addEventListener("click", doSomething, false);
btn.addEventListener("click",refresh)
var text=""

function doSomething(e) {
    if (e.target !== e.currentTarget) {
        if(e.target.textContent==="" && text=="") {
            text="X"
            e.target.textContent=text

          } else if (e.target.textContent==="" && text ==="X") {
            text="O"
            e.target.textContent=text

          } else if (e.target.textContent==="" && text ==="O") {
            text="X"
            e.target.textContent=text

          }
    }
    e.stopPropagation();
}

function refresh () {

  location.reload();

}
