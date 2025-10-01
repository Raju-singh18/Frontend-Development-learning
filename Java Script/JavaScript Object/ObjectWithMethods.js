
const person = {
  firstName: "Raju",
  lastName: "Singh",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()); // "Raju Singh"
