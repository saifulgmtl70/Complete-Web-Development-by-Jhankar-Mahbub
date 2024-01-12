const Actor = {
    Name: "Shakib Khan",
    Phone: '01813635965',
    Money: 2000000

}

// const {Name, Phone:number, Money} = Actor;

// console.log(Name);
// console.log(number);
// console.log(Money);

// const name = Actor.Name;
// console.log(name);
// const phone = Actor.Phone;
// console.log(phone);
// const tk = Actor.Money;
// console.log(tk);


//Destructuring from object //
const numbers = [43, 41];



function double(a, b){
    return [a*3, b*2];

}

// const [ek, dui] = double(7, 8);
// console.log(ek, dui);


// const arrowFunction = (x) => x ^ 2;
// const res = arrowFunction(3);
// console.log(res);

// let p = 'Javascript';
// let q = p;
// p = 'React';
// console.log(p);

// console.log(!isTrue ? "Hello" : "world");
// const sum = (p, q) => {
//     p + q;
// }
// const result = sum(2, 3);
// console.log(result);
// if("2" === 2){
//     console.log("Inside if");
// }
// else{
//     console.log("Inside else");
// }

// function work(x, y = 4){
//     return x + y;
// }

// console.log(work(32));

if (true) {
    let myVar = 10;
    console.log(myVar); // This will work and print 10
  }
  
  console.log(myVar); // This will result in an error because myVar is not defined in this scope
  