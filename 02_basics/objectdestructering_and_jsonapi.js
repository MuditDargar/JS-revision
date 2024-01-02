
// // Example object
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     address: {
//       city: 'Example City',
//       country: 'Example Country'
//     }
//   };
  
//   // Destructuring assignment
//   const { firstName, lastName, age, address: { city, country } } = person;
  
//   // Using the extracted values
//   console.log(firstName);  // Output: John
//   console.log(lastName);   // Output: Doe
//   console.log(age);        // Output: 30
//   console.log(city);       // Output: Example City
//   console.log(country);    // Output: Example Country
  

const course={
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"chaiwithcode founder"
}

// console.log(course.courseinstructor)

const {courseinstructor: bengan}= course ;
console.log(bengan)


const navbar=({company})=>{
console.log({company});
}

navbar(company="hitesh")