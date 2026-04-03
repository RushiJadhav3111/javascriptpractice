let person = {};

console.log(typeof(person));



let person2 = {
    firstName : "Rushikesh",
    lastName : "Jadhav",
    age : 21,
    hobbies : ["reading", "writing", "painting"],
    message : function(){
        console.log("Hi my name is " + this.firstName);
    }
};

console.log(person2);


let person3 = new Object();

person3.firstName = "Rushikesh";
person3.lastName = "Jadhav";
person3.age = 22;
person3.hobbies = ["Coding", "Philosophies", "Art"];

console.log(person3);


const person5 = {
  firstName : "Mayank",
  age : 21,
  lastName : "Pandey",
  isRunning : false
};


console.log(person5);

delete person5.isRunning;

console.log(person5);


const person4 = {
  firstName : "Mayank",
  age : 21,
  lastName : "Pandey",
};

person.firstName = "Love";
person.lastName = "Babbar";
person.age = 24;

console.log(person4);



``