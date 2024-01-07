// const myobj={
//     js:'javascript',
//     cpp:'c++',
//     rb:'ruby',
//     swift:'swift by apple '
// }

// // for in use in retrive a data from object

// for (const key in myobj) {
//   //  console.log(`${key} shortcut is for ${myobj[key]}`);
// }

// const programming=['js','rb','py','java','cpp']

// for (const key in programming) {
//     // console.log(key)
//     console.log(programming[key])
// }

const maps=new Map()
maps.set('IN','India')
maps.set('USA','United State of america')
maps.set('Fr','France ')


// you can't iteration on maps
for (const key in maps) {
   console.log(key)
}