// let todos = [
//     {
//         title: "html",
//         status: true,
//     },
//     {
//         title: "css",
//         status: true,
//     },
//     {
//         title: "js",
//         status: false,
//     },
// ]
// for (let index = 0; index < todos.length; index++) {
//     Element = todos[index]
//     if (Element.status) {
//         console.log(`${Element.title} is completed`);
//     } else {
//         console.log(`${Element.title} is incompleted`);
//     }

// }

// /* 
//     html is completed
//     css is completed
//     js is incompleted
// */


// todos.forEach((todo) => {
//     if (todo.status) {
//         console.log(`${todo.title} is completed`);
//     } else {
//         console.log(`${todo.title} is incompleted`);
//     }
// });

// let tod = [
//     {
//         title: "html",
//         status: true,
//     },
//     {
//         title: "css",
//         status: true,
//     },
//     {
//         title: "js",
//         status: false,
//     },
//     {
//         title: "react",
//         status: false,
//     }

// ]


// let completedTod = []
// let incompletedTod = []
// for (let index = 0; index < tod.length; index++) {
//     let element = tod[index]
//     if (element.status) {
//         completedTod.push(element)
//     } else {
//         incompletedTod.push(element)
//     }

// }
// console.log(completedTod);
// console.log(incompletedTod);
// console.log(`${tod.title} is ${tod.status }`);


let cartItems = [
    {
        name: "ram",
        products: [
            { title: "watch", price: 1000 },
            { title: "mouse", price: 500 }
        ],
    },
    {
        name: "hari",
        products: [
            { title: "watch", price: 1000 },
            { title: "keyboard", price: 1000 },
            { title: "mouse", price: 500 }
        ],
    },
    {
        name: "sita",
        products: [
            { title: "watch-gm", price: 10000 },
        ],
    },
]
cartItems.forEach(item => {
    let total = 0;
    for (let i = 0; i < item.products.length; i++) {
        total += item.products[i].price;
    }
    console.log(`${item.name} has ordered of rs ${total}`);
});

/* 
    ram has ordered of rs 1500 
    hari  has ordered of rs 2500 
    sita  has ordered of rs 10000 
*/