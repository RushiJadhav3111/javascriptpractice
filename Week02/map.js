
let MyNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// MyNum = MyNum.map( (num) => num + 10)

// console.log(MyNum);


MyNum = MyNum
            .map((num) => num*10 ) 
            .map((num) => num+1 )
            .filter((num) => num >= 41 )

console.log(MyNum);



