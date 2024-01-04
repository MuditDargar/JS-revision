// if

// const isUserloggedin=true 

// if(isUserloggedin){
//     console.log('user logged in successfully')
// }

// const temprature=41

// if(temprature<50 ){
//     console.log('less than 50')
// }
// else{
// console.log('temprture is greather than 50 ');
// }
//  < ,> , <= ,>= ,== , !=, === ,!==


// const score =200
// if(score>100){
//     const power='fly'
//     console.log(`User power : ${power}`)
// }

// const balance =1000 
//if(balance>500) console.log('test') , console.log('test2');
// in line 27 is not good quality of code if you write multible then use curly brackets for proper scope clarity ...

// const balance=1000 

// if(balance<500){
//     console.log("balance is less than 500");
// }
// else if(balance<750){
//     console.log('balance is less than 750')
// }

// else if(balance<950){
//     console.log("balance is less than 950")
// }
// else{
//     console.log('less than 1200');
// }


const userLoggedIN = true
const debtCard= true 
const loggedINFromGoogle= false
const loggedInFromEmail=true


if(userLoggedIN && debtCard){
    console.log("Allow to buy a course ")
}

if(loggedINFromGoogle || loggedInFromEmail){
    console.log("user logged in")
}