const name="Mudit"
const repocount=50 


// console.log(name + repocount  + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

const naam= new String('Muditsiss_Dargar_Maheshwari')
console.log(naam)

// string have many methods and to see the n google strings methods
console.log(naam[0]) // at 0 which is present
console.log(naam.__proto__) // type of naam


console.log(naam.length) ; // to find the length of string
console.log(naam.toUpperCase()); // convert string into upper case

console.log(naam.charAt(4)) // to ckeck at 4 position which character present
console.log(naam.indexOf('i'))


// you can't give negative value in substring
// if you give negative value than it automatically start from 0.
const newstring=naam.substring(0,4)
console.log(newstring)


//you can give negative value in slice and then start from opposite
const anotherString =naam.slice(-7,4) // to slice the string according to you
console.log(anotherString)

const newStringone="      Mudit   "
console.log(newStringone)
console.log(newStringone.trim())  //by use of trim you can remove spaces

const url="https://mudit.com/mudit%20dargar"

console.log(url.replace('%20',"_")) // to change the url by url.replace 

console.log(url.includes('mudit')) //mudit is include in url true orr false
console.log(url.includes('sachin'))

console.log(naam.split('_')); // to split by this keyword '_' 
