
// rest operator here is ...
// function calculateCartprice(...num){
//     return num;
// }

// console.log(calculateCartprice(200,400,600,300,244,780))


// function calculateCartprice(val1,val2,...num){
//     return num;
// }

// console.log(calculateCartprice(200,400,600,300,244,780))

//val1 mae 200 chale gyi
//val2 mae 400 chale gyi

//num mae baaki  chale gyi // [ 600, 300, 244, 780 ]

const obj={
    username:"mudit",
    phone_no:"6378034736"
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and phone_no is ${anyobject.phone_no}`);

}

// handleobject(obj)

handleobject({
    username:"Sam",
    phone_no:'9964646344'
})

const meme=[10,34,2,343]
function returnsecondvalue(getarray){
    return getarray[1]
}

// console.log(returnsecondvalue(meme));
console.log(returnsecondvalue([100,200,300,400]))