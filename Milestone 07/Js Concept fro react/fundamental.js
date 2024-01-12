// 1. How to decalre a variable using let and const//
let season = 'Rainy';
season = 'Winter';

const myName = 'Saiful Islam Azad';


// 2. Condition
if(season === 'rainy'){

}
else if(season === 'Rainy'){

}

else{

}


//3. Arrary
// index, length, pop,push,shift, unshift 
const numbers = [43, 54, 22, 56, 73];



//4. Loops
// for loop

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    // console.log(element);
    
}


// 4. Function


function myFunc(n1, n2){
    const sum  = n1 + n2;
    return sum;
}

const result = myFunc(43, 55);
// console.log(result);


//6. Object

const student = {
    name: "Azad",
    age: 22,
    Blood: "A+"

};

const names = student['name'];
console.log(names);
