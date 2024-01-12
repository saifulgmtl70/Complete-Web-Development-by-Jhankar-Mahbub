// const numbers = [43, 54, 22, 56, 73];

// const student = {
//     name: "Azad",
//     age: 22,
//     Blood: "A+"

// };


// const about = `My name is: ${student.name}`;
// // console.log(about);



// // Arrow Function

// const doMath = (num1, num2) =>{
//     const sum = num1 + num2;
//     return sum;
// }

// const result = doMath(43, 42);
// // console.log(`My Result is: ${result}`);


// // Spread Operator
// const newNumbers = [numbers];
// numbers.push(899);
// numbers.push(899);
// numbers.push(899);
// console.log(newNumbers);



fetch('https://api.example.com/data')
  .then(response => {
    // Check if the response status is OK (HTTP status code 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Do something with the data
    console.log(data);
  })
  .catch(error => {
    // Handle errors here
    console.error('Fetch error:', error);
  });
