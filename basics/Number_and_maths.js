// const score=400 
// console.log(score)
// const balance= new Number(100)
// console.log(balance)

// console.log(balance.toString())

// console.log(balance.toFixed(2)) //tofixed use for precision value


// const otherNumber=123.8966

// console.log(otherNumber.toPrecision(3)); //precision starting the three digits

// const hundreads=10000000

// console.log(hundreads.toLocaleString('en-IN')); // comma dsplay according to use 

// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//----------------Maths------------------------

// console.log(Math);
// console.log(Math.abs(-10)); // abs =>absolute value mean cnvert -ve value inot =ve
// console.log(Math.round(3.4565)) // convert the float number into proper integer

// console.log(Math.ceil(4.23)) //ceil chose always top value
// console.log(Math.floor(4.8)) //floor choose always low value

// console.log(Math.min(3,7,2,1,0.5,8)) // to find minimum value in array
// console.log(Math.max(3,7,2,1,0.5,10,8)) // to find max value in array

// let A=[10,5,4,8,2,1,0.2]
// console.log(Math.min(...A))

// console.log(Math.random()) ; // it generate the value between 0 to 1 .

// in 43 line we need random value greater than 1
console.log((Math.floor(Math.random()*10)+1)) //Math.random() use for generate random number

const min=10 
const max=20 

console.log(Math.floor(Math.random()*(max-min +1)) +min)
