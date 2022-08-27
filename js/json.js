
// JavaScript Object Notation = JSON
const user = { id: 230161, name: "Jakaria", profession: "student", address: "kushtia" };

const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

const shop = {
    owner: "Jakaria",
    address: {
        street: "Kushtia",
        city: "Dhaka",
        country : "Bangladesh"
    },
    products: ["Laptop", "Mobile", "Monitor", "Desktop", "Keyboard"],
    revenue: 45000,
    isOpen: true,
    isNew : false
}

console.log(shop); // output = object

const shopJSON = JSON.stringify(shop);  // output u get string
const shopObj = JSON.parse(shopJSON);  // output original i mean return object 

console.log(shopJSON);
console.log(shopObj);