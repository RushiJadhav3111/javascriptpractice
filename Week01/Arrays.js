
// Creating an array of numbers using array literal notation
const numbers = [1, 2, 3, 4, 5];

// Creating an array of strings using array literal notation
const fruits = ['apple', 'banana', 'orange'];

// Creating an array of mixed data types using array literal notation
const mixed = [1, 'apple', true, { name: 'John' }];
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(fruits);
console.log(mixed);

// Accessing the first element of the array
console.log(fruits[0]);

// Accessing the third element of the array
console.log(fruits[2]); 





// Accessing an element using a variable
const index = 1;
console.log(fruits[index]);

fruits.push('kiwi');
fruits.push('grapes');

console.log(fruits);
// Accessing the last element of the array
console.log(fruits[fruits.length - 1]); 


fruits.unshift('kiwi');
fruits.unshift('grapes');

console.log(fruits);










// Creating an array of numbers using Array constructor
const numbers2 = new Array(1, 2, 3, 4, 5);

// Creating an array of strings using Array constructor
const fruits2 = new Array('apple', 'banana', 'orange');

// Creating an empty array using Array constructor
const emptyArray = new Array();

console.log(numbers2); // Output: [1, 2, 3, 4, 5]
console.log(fruits2); // Output: ['apple', 'banana', 'orange']
console.log(emptyArray); // Output: []






const fruits3 = ['apple', 'orange'];

// Inserting 'banana' at index 1
fruits3.splice(1, 0, 'banana');
console.log(fruits3); 




// Example 1 : Filter Method on Array of Numbers
const numbers3 = [-1, 0, -20, 45, 3, 74, -5, 6];


const positiveNumbers = numbers3.filter(function(number3) {
  return number3 > 0;
});

console.log(positiveNumbers);




// Example 2 : Filter Method on Array of Objects
const products = [
    {
        id: 1,
        name: "Product A",
        price: 10 
    },

    {
        id: 2,
        name: "Product B",
        price: 20 
    },

    {
        id: 3,
        name: "Product C",
        price: 30
    },
];



const expensiveProducts = products.filter((product) => product.price > 15);

console.log(expensiveProducts);



// Example 3


const words = ["apple", "banana", "orange", "grapefruit"];

const longWords = words.filter((word) => word.length > 6);

console.log(longWords); 