var fName = prompt("Enter your first name")
var lName = prompt("Enter your last name")
var age = prompt("Enter your age")
var height = prompt("Enter your height")
var pName = prompt("Enter your pet name")


if(fName[0]===lName[0] && age>20 && age<30 && height>=170 && pName[pName.length-1]==='y')  {

  console.log("Welcome to the group");

}
else {
  console.log("Bye Bye");
}
