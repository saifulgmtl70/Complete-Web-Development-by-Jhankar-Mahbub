// const shoppingCart = [
//     {SL: 1, product: 'brinjale', price: 120},
//     {SL: 2, product: 'potato', price: 60},
//     {SL: 3, product: 'green chili', price: 200},
//     {SL: 4, product: 'oil', price: 180},
//     {SL: 5, product: 'onion', price: 70},
//     {SL: 6, product: 'applce', price: 150},
//     {SL: 7, product: 'orange', price: 140},
// ];


/* Similir -- "Class" Class has come properties, method*/
// class Products{
//     country = "Bangladesh";
//     constructor(name){
//         this.name = name;
//     }
//     speak(talk){
//         console.log(`Hello Bodda, ${talk}`);
//     }
// }

// const hello = new Products("Amar nam Saiful Islam Azad");
// console.log(hello);
// hello.speak("ki goror?");


// class Teacher{
//     constructor(name, subject, tutuinFees){
//         this.name = name;
//         this.subject = subject;
//         this.tutuinFees;
//     }
//     // lecture(){
//     //     console.log("Sir is Teaching");
//     // }
// }
// const Riyadh = new Teacher("Riyadh Sir", "Web Mastering", 1000);
// console.log(Riyadh);

// const Habib = new Teacher("Habib Sir", "Web Development", 8000);
// console.log(Habib);

// const Masud = new Teacher("Masud Sir", "IT Support", 3000);
// console.log(Masud);



// class Products{
//     constructor(productsName, productsQuantity, productsPrice){
//         this.productsName = productsName;
//         this.productsQuantity = productsQuantity;
//         this.productsPrice = productsPrice;
//     }
// }


// const Potato = new Products("Potato", "3 kilo", 180);
// console.log(Potato);

// const Onion = new Products("Onion", "5 kilo", 350);
// console.log(Onion);

// const Brinjal = new Products("Brinjal", "2 kilo", 120);
// console.log(Brinjal);



class MyTech{
    constructor(subjectName, teacherName, duration){
        this.subjectName = subjectName;
        this.teacherName = teacherName;
        this.duration = duration;
    }
}
const web = new MyTech("Web Development", "Habibur Rahman", 45);
console.log(web);