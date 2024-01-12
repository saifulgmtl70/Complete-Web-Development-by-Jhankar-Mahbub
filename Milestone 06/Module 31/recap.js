/* 
    1.Var, Let, const 
    2.Default parameters
    3.template string
    4. Arrow function
    5. Destructuring
    7. kyes, value
    7. for of used in array and string
    8. for in used in object
*/

// const a = 40;
// const numbers = [43, 22, 45, 100];
// const preson = {
//     name:"Saiful Islam Azad",
//     age: 21
// }

// const messages = `Hello, ${preson.name} age is ${preson.age} and he has ${a} types of medicine
// ${numbers[3]} types of foods item`;

// // console.log(messages);
// const square = x => x ^ 2;


// const {name, age, ...others} = {a: 10, b: 12, c:15, name: "Saiful Islam Azad", age: 21};
// console.log(name, age, others);


const[first, second, third, ...remained] = ['Azad', 'Masab', 'Hridoy', 'Ahsan', 'Akib'];
console.log(first, second, third, remained);

