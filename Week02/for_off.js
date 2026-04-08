const arr = [1, 2, 3, 4, 5]
for (const key of arr) {
    console.log(key);   
}


const rushikesh = "RUSHIKESH"
for (const char of rushikesh) {
    console.log(`Each char of RUSHIKESH is ${char}`);
    
}


const map = new Map()
map.set(`IN`, "INDIA")
map.set(`USA`, "UNITED STATE OF AMERICA")
map.set(`FR`, "FRANCE")


// console.log(map);

for (const [keys, value] of map) {
    console.log(keys, `: `, value);   
}
