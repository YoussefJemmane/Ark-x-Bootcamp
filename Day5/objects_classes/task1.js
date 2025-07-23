let me = {
  firstName: "Youssef",
  lastName: "Jemmane",
  age: 22,
  fullName: function () {
    return "My name is " + this.firstName + " " + this.lastName;
  },
};

console.log(me.fullName());
