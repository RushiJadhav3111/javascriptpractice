

const MyNum = [1,2, 3, 4, 5, 6, 7, 8 ]


// console.log(MyNum);
MyNum.forEach(function(val) {
    // console.log(val);   
})


for (const Num of MyNum) {
    // console.log(Num);   
}
 

for (const Num in MyNum) {
    // console.log(MyNum[Num]);  
}


const newnum = MyNum.filter((Num) => Num >= 4)
// console.log(newnum);

const newnum2 = MyNum.filter((Num) => {
   return Num >= 4
})
    console.log(newnum2);


newnum.forEach(function(val) {
    // console.log(val);   
})




