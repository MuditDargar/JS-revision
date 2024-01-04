// const useremail='muditdargar@gmail.com'
// const useremail=""
const useremail=[]
if(useremail){
    console.log('got user email')
}
else{
    console.log("don't have user email");
}

// falsy Values
// false,0,-0,BigInt 0n, "",null,undefined ,NaN

//truty Values
// "0",'false'," ",[],{},function(){}

// if(useremail.length===0){
//     console.log('array is empty')
// }

const emptyobj={}

if(Object.keys(emptyobj).length===0){
    console.log('object is empty');
}

// false==0   output=>true
// false==''   output=>true
//  0 ==''   output=>true





//Nullish Coalescing Operator (??): null undefined

let val1;
// val1=5 ?? 10 
 // val1=null ?? 10
// val1 =undefined ?? 15
 val1 =null ?? 20 ?? 40
console.log(val1);



//Ternary operator
// condition ? true : false
const iceteaprice=100
iceteaprice<=80 ? console.log('less than 80') : console.log('not less than 80')

