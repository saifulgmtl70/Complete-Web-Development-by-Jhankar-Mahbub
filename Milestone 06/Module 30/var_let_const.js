const numbers = [23, 44, 54, 22, 36, 78];
// numbers[3] = 100;
// numbers.push(200, 400, 500)
// console.log(numbers);


let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(element);
    sum = sum + element;
    
}

console.log(sum);