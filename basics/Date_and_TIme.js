
// console.log(myDate.toString()) // output Wed Dec 27 2023 15:42:27 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()) //output 2023-12-27T10:12:27.633Z
// console.log(myDate.toJSON())//output2023-12-27T10:12:27.633Z
// console.log(myDate.toLocaleDateString()) // only date show in this format 27/12/2023
// console.log(myDate.toLocaleString()) //date show with time in this format 27/12/2023, 3:42:27 pm

// console.log(typeof Date) //Date is function

// let myDate=new Date(2023,0,23,5,3)
// // month start with 0 in javascript
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// let mycreateDate=new Date("2023-01-14")
// //  // valid if year-month-date ...
// // console.log(mycreateDate.toLocaleString());

// let mytimestamp=Date.now()
// // console.log(mytimestamp)

// // console.log(mycreateDate.getTime())

// console.log(Math.floor(Date.now()/1000))

let newDate= new Date()
console.log(newDate)
console.log(newDate.getDate()) // today date
console.log(newDate.getFullYear()) // year
console.log(newDate.getMonth())//0:january 11:december
console.log(newDate.getDay()) //0 monday 7-sunday

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
 weekday:"long" ,

})