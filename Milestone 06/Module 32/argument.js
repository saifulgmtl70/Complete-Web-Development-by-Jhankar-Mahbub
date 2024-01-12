function some(a, b, c){
    const args = [...arguments];
    // console.log(args);
    for (const iterator of args) {
        console.log(iterator);
    }
    const result = a + b + c;
    return result;
}

// console.log(arguments);

const total = some(32, 34, 43);
// console.log(total);