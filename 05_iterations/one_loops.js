//for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==7){
       // console.log("thala for a reason ")
    }
   // console.log(element);
}

for (let i = 1; i <=10; i++) {
    //console.log(`outer loop value:${i}`)
   for (let j = 1; j <= 10; j++) {
   //  console.log(`inner loop value:${j} and inner loop ${i}`)
  // console.log(i+'*'+ j + '=' + i*j ) 
   }
    
}

let myarray=['flash','shaktiman','naagraj','batsman','spiderman','superman','ironman','thor','loki','hulk']
// console.log(myarray.length)
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index]
   // console.log(element)
    
}

// break and continue 

// ++++++++++  break ++++++++++++++++++
for (let index = 1; index <=20; index++) {
    if(index==7){
  console.log('thala for a reason ')
  break ;
    }
  console.log(`value of index is ${index}`)

}

// +++++++++++++++++ continue +++++++++++++++++++++++
for (let index = 1; index <=20; index++) {
    if(index==7){
// console.log('thala for a reason ')
   continue ; 
    }
 //console.log(`value of index is ${index}`)

}