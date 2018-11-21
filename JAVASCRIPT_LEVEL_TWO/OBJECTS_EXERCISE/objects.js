var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength:function() {
    console.log("The name length is "+this.name.length)
  },
  detailsAlert: function() {

    alert("The name is "+this.name)
    alert("The job is "+this.job)
    alert("The age is "+this.age)
  },

  getLastName: function() {
    var lastName=[]
    lastName = this.name.split(" ")
    console.log("The last name is "+lastName[1])
  }
}
