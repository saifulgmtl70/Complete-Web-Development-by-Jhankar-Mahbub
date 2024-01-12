function greetings(myGreetings, name){
    myGreetings(name);
}

// const number  = {name: "Azad", age: 21, address: "Coxs'Bazar"};

function myGreetings(name){
    console.log("Helo Bangladesh", name);
}

function herGreetings(name){
    console.log("Ite ken ache??", name);
}
greetings(myGreetings, "Ken acho?");
greetings(myGreetings, "Ki hobor?");
greetings(myGreetings, "Din hal ken choler?");
greetings(herGreetings, "ite biya goijje ne??");

// console.log(number);