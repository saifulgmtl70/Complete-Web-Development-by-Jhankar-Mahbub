const numbers = [3,24, 42, 11, 20, 43];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element);
    
// }

// for (const element of numbers) {
//     console.log(element);
// }


// const string = "Hello Bangladesh";

// for (const char of string) {
//     console.log(char);
// }

const student = {
    name: "Azad",
    roll: 172526,
    blood: "A+"
}


for (const key in student) {
    const value = student[key];
    console.log( value);
}
