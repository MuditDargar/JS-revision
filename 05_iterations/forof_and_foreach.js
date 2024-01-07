// for of loop

// ['','','']
// [{},{},{}]

const arr=[1,2,3,4,5,6]
// iterator is just like i in loop
// here object is kis par loop lagana hai
// for (const iterator of object) {
    
// }

for (const  val of arr) {
    //console.log(val);
}

const naamm='Mudit Dargar'

for (const nm of naamm) {
  //console.log(`Each char is ${nm}`)
}

//maps
const maps=new Map()
maps.set('IN','India')
maps.set('USA','United State of america')
maps.set('Fr','France ')
// console.log(maps)

for(const [key,value] of maps){
 //   console.log(key,':-',value)
}

const myObject={
    'games1':'NFS',
    'games2':'Spiderman'
}

// object is not iterable
// for(const [key,value] of myObject){
//     console.log(key,':-',value)
// }






