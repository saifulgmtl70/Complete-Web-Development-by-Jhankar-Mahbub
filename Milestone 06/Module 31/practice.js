// let students = {
//     2222: {
//         name: "Jack",
//         section: "C",
//         class: "XI",
//         addrees: {
//             "building no": 12,
//             "street": "St. Jonson",
//             "city": "Petersburg",
//             "country": "UK"
//         }
//     },
//     3333: {
//         name: "Herry",
//         section: "D",
//         class: "XI",
//         addrees: {
//             "building no": 85,
//             "street": "DC road",
//             "city": "Khilkhet",
//             "country": "Bangladesh"
//         }
//     }
// };


// const peter = students[2222].addrees.city;
// console.log(peter);


/* Practice Task one */
const myArray = [1, 3, 5, 7, 9];
const evenArray = [];
 
for (const element of myArray) {
    // console.log(element);
    let even = element + 1;
    // console.log(even);
    evenArray.push(even);
    
}
// console.log(evenArray);


/* Practice Task Two */
// using filter method
const anArray = [33, 50, 79, 78, 90, 101, 30];
const divideByTen = anArray.filter(num => num % 10 === 0); 
// console.log(divideByTen);

// using find method
const Array = [33, 50, 79, 78, 90, 101, 30];
const dten = Array.find(num => num % 10 === 0); 
// console.log(dten);



/* Practice Task Three */
const instructor = [
    {name: "nodi", age: 28, position: "senior"},
    {name: "Akil", age: 26, position: "junior"},
    {name: "Shobuj", age: 30, position: "senior"},
];

const gettingSenior = instructor.filter(naam => naam.position === "senior");
// console.log(gettingSenior);



/* Practice Task Four */
// using for loop
const people = [
    {name: "Meena", age: 20},
    {name: "Rina", age: 15},
    {name: "Suchona", age: 22}
];

const getTheAge = people.map(boyos => boyos.age);
let sum = 0;
for (const element of getTheAge) {
    // console.log(element);
    sum += element;
}
// console.log(sum);
// console.log(getTheAge);

//Using reduce method
const myPeople = [
    {name: "Meena", age: 20},
    {name: "Rina", age: 15},
    {name: "Suchona", age: 22}
];

const getAge = myPeople.reduce((prevValue, currentValue) => prevValue + currentValue.age,0);
console.log(getAge);


