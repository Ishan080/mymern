let todos = [
    {
        title: "html",
        status: true,
    },
    {
        title: "css",
        status: true,
    },
    {
        title: "js",
        status: false,
    },
]
for (let index = 0; index < todos.length; index++) {
    Element = todos[index]
    if (Element.status) {
        console.log(`${Element.title} is completed`);
    } else {
        console.log(`${Element.title} is incompleted`);
    }

}

/* 
    html is completed
    css is completed
    js is incompleted
*/


todos.forEach((todo) => {
    if (todo.status) {
        console.log(`${todo.title} is completed`);
    } else {
        console.log(`${todo.title} is incompleted`);
    }
});

let tod = [
    {
        title: "html",
        status: true,
    },
    {
        title: "css",
        status: true,
    },
    {
        title: "js",
        status: false,
    },
    {
        title: "react",
        status: false,
    }

]


let completedTod = []
let incompletedTod = []
for (let index = 0; index < tod.length; index++) {
    let element = tod[index]
    if (element.status) {
        completedTod.push(element)
    } else {
        incompletedTod.push(element)
    }

}
console.log(completedTod);
console.log(incompletedTod);
console.log(`${tod.title} is ${tod.status }`);