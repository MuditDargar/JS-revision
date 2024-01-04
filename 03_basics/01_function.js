function saymyname(){
    console.log("m")
    console.log("u")
    console.log("d")
    console.log("i")
    console.log("t")
    console.log("d")
    console.log("a")
    console.log("r")
    console.log("g")
    console.log("a")
    console.log("r")
}

// saymyname()

// jese function mae number1,number2daale woh parameters hai
// mean jab function ko defined karte hai woh parameters hote hai
// function sum(number1,number2){
//     console.log("sum of two number is", number1+number2 )
// }

function sum(number1,number2){
    // let result= number1+number2 
    // return result 
     return  number1+number2 
}




// jab call karke hai woh arguements hote hai
const result = sum(220,280)

// console.log("result :",result)

function logginusermessange(username='aee_vedya'){
//     if(username===undefined){
//  console.log("please enter a username")
//  return 
// }
if(!username){
    console.log("please enter a username")
    return 
   }

    return `${username} just logged in`

}

console.log(logginusermessange())
// console.log(logginusermessange("monchu"))