// let num1 = 6;
// let num2 = 7
// function multify(a, b){
//     a = 120;
//     const result = a * b;
//     return result;
// }

// const output = multify(num1, num2);
// console.log(output);


let student1 = {name:"Saiful", partner: "Suchona"};
let student2 = {name: "Azad", partner: "mim"};

function getMake(couple1, couple2){
    couple1.name = "Saiful Islam Azad";
    couple2.partner = "Sadiya";
}

console.log(student1, student2);
getMake(student1, student2);
console.log(student1, student2);