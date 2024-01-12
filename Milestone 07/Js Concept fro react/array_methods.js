const products = [
    {name: "Vivo", Price: 25000, Storage: "128GB", Camera: "20MP"},
    {name: "Redmi", Price: 8000, Storage: "4GB", Camera: "10MP"},
    {name: "Oppo", Price: 17000, Storage: "64GB", Camera: "15MP"},
    {name: "Samsung A70", Price: 21000, Storage: "128GB", Camera: "20MP"},
    {name: "Huaewi", Price: 19000, Storage: "64GB", Camera: "15MP"}
];

// console.log(products[2]);

const phoneNames = products.map(phone => phone.Price);
// console.log(phoneNames);

// products.forEach(product => {
//     console.log(product.name);
//     console.log(product.Price);
//     console.log(product.Storage);
//     console.log(product.Camera);
//     console.log("\n");
// });


// Filter 

const cheper = products.filter(product => product.Price <= 6000);
// console.log(cheper);

const specificName = products.filter(product => product.name.includes("S"));
// console.log(specificName);


// Find

const finding = products.filter(product => product.name.includes("o"));
console.log(finding);