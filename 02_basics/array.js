//array

const myArr=[10,14,23,30,4,5]

const myHeros=["shaktiman","naagraj","jacob","nago"]

const myArr2=new Array(1,2,3,6,5,4)
// console.log(myArr[2])

// //Array methods
// myArr.push(45)
// myArr.push(95)
//  myArr.pop()

// myArr.unshift(9)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)
// console.log(myArr.includes(30))
// console.log(myArr.indexOf(3))
// console.log(myArr.indexOf(4))
// console.log(myArr)

const newArr = myArr.join()
console.log(myArr)
console.log( newArr)

console.log(typeof myArr) //array is object
console.log(typeof newArr)// this is the string


//Slice and Splice

console.log("A" ,myArr);

const myn1=myArr.slice(1,3) //include index 1 ,2 and not include 3rd 
// in slice last index is not include

console.log(myn1)
console.log("B " ,myArr) // B  [ 10, 14, 23, 30, 4, 5 ]

const myn2=myArr.splice(1,3) // include index 1,2, and a3 also
// in splice all index include


//Splice manipulate the original array
//slice don't manipulate original array
console.log("C " ,myArr) 
//C  [ 10, 4, 5 ]
 //  [ 14, 23, 30 ]
console.log(myn2)


