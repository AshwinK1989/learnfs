var runner = prompt("Would you like to start the roaster web app? (y/n)")
var roast=[]
if(runner==="y") {
action()
}

function action() {
  var action = prompt("Please select an action: add remove display or quit")
  if(action === "add") {
    var addName = prompt("Please add the name")
    add(addName)
  }

  if(action === "remove") {
    var removeName = prompt("Please remove the name")
    remove(removeName)
  }

  if(action === "display") {
    console.log(display())
  }

  if(action === "quit") {
    console.log("Thanks for visiting")
  }

}

function remove(name) {

  var index = roast.indexOf(name)

  if(index>-1) {

    roast.splice(index,1)
  }
  action()
}

function add(name) {

  roast.push(name)
  action()
}

function display() {
  console.log(roast);
  action()
}
