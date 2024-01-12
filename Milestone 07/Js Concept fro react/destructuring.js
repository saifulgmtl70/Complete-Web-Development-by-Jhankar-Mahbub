// // Array Destructuring
// const numbers = [43, 24, 54];
// // const a = numbers[0];
// // const b = numbers[1];

// // console.log(a, b);



// const[a, b, c, d] = [32, 44, 24, 32];
// // console.log(a, ",", b, c, d);


// function boxsiFy(num1, num2, num3, num4){
//     const numbers = [num1, num2, num3, num4];
//     return numbers
// }

// console.log(boxsiFy(32, 44, 56, 77));


const employee = {
    ide: "VS Code",
    designation: "Developer",
    machine: "Windows",
    languages: ['HTML5, CSS3, JAVASCRIPT', "REACT", "PHP"],
    specification: {
        height: 54,
        width: 67,
        address: "Gomatali",
        drink: "Water"
    }
};


const{ide, designation, machine} = employee;
// console.log(ide, designation, machine);

const[languages] = employee.languages;
// console.log(languages);

const{height, width, address, drink} = employee.specification
console.log(height, width, address, drink);