/* 
8 ways to get undefined
1. Variable that is not initialized will give undefined
2. Function with no return
3. parameter that will
*/

let a;
// console.log(a);
function add(a, b){
    const sum = a + b;
}
const result = add();
// console.log(result);



function noOrNegative(a, b){
    if(a < 0 || b < 0){
        return;
    }
    return a + b;
}

const totAL = noOrNegative(5, -2);
// console.log(totAL);


