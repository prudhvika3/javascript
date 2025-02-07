// Objects 
// Author https://nagvbt.github.io/

let person = {
    name: "MrNBT",
    age: 30,
    greet: function (name) {
      return `Hello, my name is ${this.name}`;
    },
  };
  
  console.log(person.name); 
  console.log(person.greet("Balaji"));
  