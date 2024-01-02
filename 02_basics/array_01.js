const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=['superheros','flash','batman']


 marvel_heros.push(dc_heros)
 // by the use of push dc_heros is a subarray in marvel_heros
console.log(marvel_heros)
console.log(marvel_heros[3][2])
console.log(marvel_heros[3][1])

// by  the use of concat combine two orr more arrays
//concat give you a new array 
 const all_heros=marvel_heros.concat(dc_heros)
console.log(all_heros)

//Spread operator

 const all_new_heros=[...marvel_heros,...dc_heros]
// // ...  by the use of this  all elements are spreadand then concat
 console.log(all_new_heros)

const another_array=[1,2,3,[4,5,6],[6,7,[4,5]]]

 const real_another_array=another_array.flat(Infinity)
 // by use of flat all element in array and innar array,spread out 

 console.log(real_another_array);

console.log(Array.isArray("Mudit"))
console.log(Array.from("Mudit"))
console.log(Array.from({name:"hitesh"})) //Interesting
// console.log(Array.of({name:"hitesh"}))
 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))

// read about isarray ,from and of array.
 
//  isArray Method:

// The Array.isArray() method is a built-in JavaScript function that is used to check whether an object is an array or not.
// It returns true if the object is an array and false otherwise.

// from Method:

// The Array.from() method creates a new, shallow-copied array instance from an array-like or iterable object.
// It takes an iterable object (like an array or string) and returns a new array.

// of Method:

// The Array.of() method creates a new array instance with a variable number of arguments, regardless of the number or type of the arguments.
// It is useful for creating an array from a set of values without the need for a literal array.