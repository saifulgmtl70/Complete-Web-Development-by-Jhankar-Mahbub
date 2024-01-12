// const first = [];
// const second = first;
// if(first === second){
//     console.log("Values are equal");
// }
// else{
//     console.log("Values are not same");
// }


// const y = '';
// if(!y){
//     console.log("Value is falsy");
// }
// else{
//     console.log("Value is truthy");
// }



// const num1 = '1';
// const num2 = true;
// if(num1 == num2){
//     console.log("Values are equal");
// }
// else{
//     console.log("Values are not equal");
// }

// Type coercion
// Type conversion



// const first = {a: 2, b: 3};
// const second = first;

// if(first === second){
//     console.log("Both are equal");
// }
// else{
//     console.log("both are not eaual");
// }


// always use ===
//eaual compariosn doesn't work for non-primitive



function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    
    
    
    return true;
  }
  
  const array1 = [1, 2, 3];
  const array2 = [1, 2, 3];
  
  console.log(arraysAreEqual(array1, array2)); // true
  