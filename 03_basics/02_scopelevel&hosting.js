//example: chote bade se icecream le sakhta hai,bade chote se nhi le sakhta

// function one(){
//     const username="Mudit"

//     function two(){
//         const website="youtube"
//         console.log(username);
//     }
//   //  console.log(website);

//     two()
// }


// one()

if(true){
    const name="mudit"
    if(name==='mudit'){
        const website= " youtube"
       //  console.log(name + website)
    }
   //  console.log(website);
}
// console.log(username);

//++++++++++++++++++++++++ interesting ++++++++++++++++++++++++

console.log(addone(10))
function addone(num){
    return num+1
}

//expression in 37 
const addtwo=function(num){
    return num+2 
    }

console.log(addtwo(19)) // this give error if you run before this
    //because you assigned as function in const ,before define you not use const

    // this concept help in hosting