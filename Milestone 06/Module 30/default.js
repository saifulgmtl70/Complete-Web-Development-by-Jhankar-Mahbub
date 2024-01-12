// function add(num1, num2){
//     const sum = num1 + num2;
//     console.log(num1, "\n", num2, "\n", sum);
//     return sum;
// }

// add(10, 12);


function mySum(a = 4,b){
    console.log(a);
    console.log(b);
    const result = a + b;
    console.log(result);
}

const sum  = mySum(5);
// console.log(sum);