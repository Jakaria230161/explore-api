
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

// console.log(shop); // output = object

const shopJSON = JSON.stringify(shop);  // output u get string
const shopObj = JSON.parse(shopJSON);  // output original i mean return object 

// console.log(shopJSON);
// console.log(shopObj);


const stuInfo = JSON.stringify({ name: "james", roll: 3 });
// console.log(stuInfo.name);


const user1 = { id: 1, name: "Abdullah", job: "student" };
const stringified1 = JSON.stringify(user1);

console.log(user1);
console.log(stringified1);

const shop1 = {
    owner: "Jakaria",
    address: {
        village: "keorabunia",
        city: "Barguna",
        country: "Bangladesh"
    },
    products1: ["pencil, pen, books, watch"],
    revenue: 45666,
    isOpen: true,
    isNew: false
};

console.log(shop1);

const shop1JSON = JSON.stringify(shop1); // eikhane ekta objects er moddhe sob string akare dibe then expand kore dekha jaibo na + access o kora jaibo na.
const shopObj1 = JSON.parse(shop1JSON); // parse korle object return korbe and etare expand kore sob kichu dekha jabe, access  kora jabe.

console.log(shop1JSON);
console.log(shopObj1);


// note : json a convert korte chaile stringify use korte hobe r string format a ache oita object a neowar jonne json.parse use korte hobe. 