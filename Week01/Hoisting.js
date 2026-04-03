sayMyName("Rushikesh")

function sayMyName(finalName) {
    console.log(finalName);
}



console.log(age);
var age = 10;



let age2 = 10;
console.log(age2);


sayHello();
function sayHello() {
    console.log("Hello jee kaise ho saare");
}


// const object1 = New Human();
// class Human {
    
// }




function greetMe(greet, fullName){
    console.log("Hello", fullName);
    greet();
}


let greet = function(){
    console.log("Greeting for the day")
}

greetMe(greet,"Rushikesh");
// greet();




function solve(number){
    return function(number){
        return number*number;
    }
}


let ans = solve(5);

let finalAns = ans(10);
console.log(finalAns);



const arr = [
    function(a,b){
        return a+b;
    },

    function(a,b){
        return a-b;
    },

    function(a,b){
        return a*b;
    },

    function(a,b){
        return a/b;
    },
];

let first = arr[0];

console.log(first(5,10));

console.log(arr[1](5,10));

console.log(arr[2](5,10));

console.log(arr[3](5,10));