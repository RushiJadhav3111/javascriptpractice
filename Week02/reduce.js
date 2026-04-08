let MyNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// MyNum = MyNum.reduce(function(acc, item) { return acc + item} ,0)

// console.log(MyNum);

MyNum = MyNum.reduce((acc, item)  => acc + item ,0)

console.log(MyNum);



let shoppingcart = [
    {
        item: "javascript",
        fees: 2999
    },
    {
        item: "pthon",
        fees: 3999
    },
    {
        item: "android dev",
        fees: 4999
    },
    {
        item: "web dev",
        fees: 2999
    },
    {
        item: "data science",
        fees: 12999
    }
]


shoppingcart = shoppingcart.reduce( (acc, val) => acc + val.fees ,0 )
console.log(shoppingcart);


