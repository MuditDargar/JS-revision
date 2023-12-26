
//primitves
//7 types :- String,Number ,Boolean,null,undefined,symbol,
//BigInt

const score=100
const scoreValue=100.3

const isLoggedIn= false
const outsideTemp=null
let userEmail;

const id=Symbol('123') //symbol use for unique id
const anotherId=Symbol('123')

// console.log(id===anotherId)

 // const bigNmuber=323456765433333n

//Reference (NOn Primitive)
//Array ,Objects,Functions

//Array
const heros=["shaktiman","naagraj","doga"]


//Object

let obj={ 
    name: "Mudit Dargar",
    age:22,

}

//function

const myFunction=function(){
    console.log("hello world");
}


console.table([typeof heros,typeof obj ,typeof myFunction])
console.log(typeof anotherId)