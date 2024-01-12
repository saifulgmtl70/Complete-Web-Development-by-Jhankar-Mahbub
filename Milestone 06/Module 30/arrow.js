// function sum(n1, n2){
//     return n1 + n2;
// }
//  const summation = sum(34, 43);
//  console.log(summation);


// const add = (a, b) => a + b;

// const sum = add(10, 40);


// console.log(sum);

// const student = {Name: 'Saiful Islam Azad', Roll: 172526, Blood: 'A+'};
// const catchName = (stu) => stu.Name;
// const bloodGroup = catchName(student);
// console.log(bloodGroup);

// const getRoll = (roll) => roll.Roll;
// const rolling = getRoll(student);
// console.log(rolling);

// const getBlood = (blood) => blood.Blood;
// const Bgroup = getBlood(student);
// console.log(Bgroup);


// const myArray = [3, 42, 44, 100, 78, 299, 83];
// const getIndex = numbers => numbers[3];
// const index = getIndex(myArray);
// console.log(index);


const doMath = (a, b, c) => {
    const sum = a + b + c;
    console.log(sum);

    const sub = a - b - c;
    console.log(sub);

    const mult = a * b * c;
    console.log(mult);

    const result = sum + sub + mult;
    console.log(result);
    return sum, sub, mult, result;
}

const getResult = doMath(43, 34, 24);
console.log(getResult);