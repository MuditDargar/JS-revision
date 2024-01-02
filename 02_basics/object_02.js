//const tinderUser=new Object() this is the singleton object
const tinderUser={} //this is not a singleton object
// console.log(tinderUser)
tinderUser.id="123154"
tinderUser.name="Bassi harsh"
tinderUser.isLoggedin=false

// console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        username:{
firstname:"Mudit",
Lastname:"Dargar"
        }
    }
}
// console.log(regularUser.fullname);

 console.log(regularUser.fullname.username.firstname,regularUser.fullname.username.Lastname);
// Mudit Dargar

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"Mudit",
    4:"Dargar"
}

// const obj3={obj1,obj2}

const obj3=Object.assign({}, obj1,obj2)
// {} obj1 and obj2  assign to empty object
const obj4=Object.assign(obj1,obj2)
//obj2 assign in obj1 and then assigned in obj4.
// console.log(obj3)


// you do also with the use of spread operator
const objj={...obj1,...obj2};
console.log(objj)

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"md@gmail.com"
    },
    {
        id:3,
        email:"dar@gmail.com"
    },
    {
        id:4,
        email:"gar@gmail.com"
    }
]

console.log(users[0].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser))
// you can retrive all keys of any object by Object.keys() and return type is array

console.log(Object.values(tinderUser))
// you can retrive all values of any object by Object.values() and return type is array

console.log(Object.entries(tinderUser))

// by this Object.entries() you can separate eact elements in separate array.
// Output:- 
// [
//     [ 'id', '123154' ],
//     [ 'name', 'Bassi harsh' ],
//     [ 'isLoggedin', false ]
//   ]

console.log(tinderUser.hasOwnProperty('isLoggedin'));  // mean isloogedin naam ki property hai yaa nhi hai agar hai toh true and false
// it give the output in boolean format

console.log(tinderUser.hasOwnProperty('islooo'))

// and read yourself object properties and explore more