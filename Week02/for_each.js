const coding = ["js", "c++", "ruby", "java", "python"]

coding.forEach( function (val) {
    // console.log(val);
})

coding.forEach( (val) => {
    // console.log(val);
})


function printme(item){
    // console.log(item);    
}

// coding.forEach(printme)



const Mycoding = [
    {
        languageName: "JavaScript",
        languageFile: "js"
    },
    {
        languageName: "Python",
        languageFile: "py"               
    },
    {
        languageName: "CPP",
        languageFile: "c++"       
    },
    {
        languageName: "kotlin",
        languageFile: "kl"
    },
]


Mycoding.forEach((value) => {
    console.log(value.languageFile);
})

