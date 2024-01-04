// scope {}

// var c=300
// if se jo bahar hai woh hai global scope

let a=300
if(true){
    // if ke ander jo hai woh hai block scope
    let a=10
    const b=20
    // var c=30
    console.log("inner a is" ,a)

}
  console.log(a)
// console.log(b)
//console.log(c)