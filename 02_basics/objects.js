
// using the use of literals you not make singleton
// orr constructor se banega toh singleton banega

//object  literals

// this is the array => []
// this is the object => {}

const mySym=Symbol("key1")




const jsUser={
    name:'mudit',
    "Full name":"Mudit Dargar",
    age:21,
    [mySym]:"mykey1",
    location:'jaipur',
    Email:'mudit@gmail.com',
    isLoggedIN:false,
    lastLogginDays:["Monday","Saturday"]
}

// console.log(jsUser.Email)
console.log(jsUser["Email"])
// console.log(jsUser."Full name")
// you can't access by dot operator
console.log(jsUser["Full name"])

console.log(jsUser[mySym])

jsUser.name="Monchu"
console.log(jsUser["name"])
// Object.freeze(jsUser) // by object.freeze() iske baad changes karoge toh changes nahi hoge object ke ander

//email ki value change nhi hui kyoki usko freeze kar diya  email change ke pahle


jsUser.Email="muditdargar@gamml.com"
// In an object, [mySym] represents a symbol, and
// "mykey1" is a key associated with it. This implies that the object likely has a property
// or value corresponding to the specified key.


// you use thsi bracket [] in [mysem] then in output [mysem] change with [Symbol(key1)]: 'mykey1
console.log(jsUser)


jsUser.greeting=function(){
    console.log("hello you are in jsUser")
}

jsUser.greetingTwo=function(){
    console.log(`hello you are in jsUser, ${this.name}`)
}


// console.log(jsUser.greeting); //output is undefined

// console.log(jsUser.greeting()) // this give the error greeting is not a function
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())