// const products = [
//     {id: 1, name: "Vivio y72 5g", price: 25000},
//     {id: 2, name: "Oppo A32", price: 19000},
//     {id: 3, name: "Samsung Galaxy A70", price: 21000},
//     {id: 4, name: "Redmi Go", price: 8000},
// ];

// const names = products.map(n => n.name );
// console.log(names);

// const price = products.map(p => p.price );
// console.log(price);

// products.forEach(p => console.log(p.id));

// const most = products.filter( p => p.price > 25000);
// // console.log(most);

// const finding = products.find( p => p.price < 10000);
// // console.log(finding);

// const total = products.reduce((accum, current) => accum + current.price,0);
// console.log(total);


const shoppingCart = [
    {SL: 1, product: 'brinjale', price: 120},
    {SL: 2, product: 'potato', price: 60},
    {SL: 3, product: 'green chili', price: 200},
    {SL: 4, product: 'oil', price: 180},
    {SL: 5, product: 'onion', price: 70},
    {SL: 6, product: 'applce', price: 150},
    {SL: 7, product: 'orange', price: 140},
];

const unAffordable = shoppingCart.filter(p => p.price > 100);
// console.log(unAffordable);
const affordable = shoppingCart.filter(p => p.price < 100);
// console.log(affordable);
const totalPrice = shoppingCart.reduce((prevPrice, currentPrice) => (prevPrice + currentPrice.price) ,0);
console.log("Total Price is: ", totalPrice);

