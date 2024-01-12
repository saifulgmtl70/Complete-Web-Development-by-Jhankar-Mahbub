const user = {id:1, name: "Gorib AAmir", job:"Actor"};
const stringfied = JSON.stringify(user)
// console.log(user);
// console.log(stringfied);

// JavaScript Object Notation (JSON)

const shop = {
    owner: "Asif",
    address: {
        city: "Chattogram",
        country: "Bangladsh"
    },
    products: ['laptop', 'dsktop', 'monitor', 'keyboar', 'mouse'],
    revenue: 50000,
    isOpen: true,
    isNew: false
    
};


// console.log(shop);
const shopJason = JSON.stringify(shop.address);
console.log(shopJason);