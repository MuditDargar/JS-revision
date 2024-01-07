
const coding=['js','ruby','cpp','c','python','java']

// coding.forEach(function greet(val){
// console.log(val);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printme(item){
//     console.log(item)
// }

// coding.forEach(printme)

// coding.forEach((element,index,arr) => {
//     console.log(element,index,arr)
// });

const mycoding=[
    {
        languageName:'javascript',
        languageFileName:'js'
    },
    {
        languageName:'java',
        languageFileName:'java'
    },
    {
        languageName:'python',
        languageFileName:'py'
    },
    {
        languageName:'c++',
        languageFileName:'cpp'
    }
]

mycoding.forEach((element) => {
    console.log(element.languageName)
});