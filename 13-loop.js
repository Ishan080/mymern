// let users = ["ram", "shyam", "hari", "sita"]

// for (let index = 0; index < users.length; index++) {
//     console.log(`in index ${index}user is ${users[index]}`);

// }

let db_users = [
    { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
    { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
    { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
    { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    { name: 'Amit', email: 'amit@gmail.com', password: 'amit4' },
    { name: 'Anjana', email: 'anjana@gmail.com', password: 'anjana5' },
    { name: 'Bijay', email: 'bijay@gmail.com', password: 'bijay6' },
    { name: 'Bikash', email: 'bikash@gmail.com', password: 'bikash7' },
    {
        name: 'Chhiring',
        email: 'chhiring@gmail.com',
        password: 'chhiring8'
    },
    { name: 'Dilip', email: 'dilip@gmail.com', password: 'dilip9' },
    {
        name: 'Dipendra',
        email: 'dipendra@gmail.com',
        password: 'dipendra10'
    },
    { name: 'Gagan', email: 'gagan@gmail.com', password: 'gagan11' },
    { name: 'Gauri', email: 'gauri@gmail.com', password: 'gauri12' },
    { name: 'Hari', email: 'hari@gmail.com', password: 'hari13' },
    {
        name: 'Ishwari',
        email: 'ishwari@gmail.com',
        password: 'ishwari14'
    },
    { name: 'Jeevan', email: 'jeevan@gmail.com', password: 'jeevan15' },
    { name: 'Kabita', email: 'kabita@gmail.com', password: 'kabita16' },
    { name: 'Kiran', email: 'kiran@gmail.com', password: 'kiran17' },
    {
        name: 'Krishna',
        email: 'krishna@gmail.com',
        password: 'krishna18'
    },
    { name: 'Laxmi', email: 'laxmi@gmail.com', password: 'laxmi19' },
    { name: 'Manish', email: 'manish@gmail.com', password: 'manish20' },
    { name: 'Nabin', email: 'nabin@gmail.com', password: 'nabin21' },
    {
        name: 'Nirajan',
        email: 'nirajan@gmail.com',
        password: 'nirajan22'
    },
    {
        name: 'Pradeep',
        email: 'pradeep@gmail.com',
        password: 'pradeep23'
    },
    { name: 'Pragya', email: 'pragya@gmail.com', password: 'pragya24' },
    { name: 'Rajan', email: 'rajan@gmail.com', password: 'rajan25' },
    { name: 'Rina', email: 'rina@gmail.com', password: 'rina26' },
    { name: 'Sabin', email: 'sabin@gmail.com', password: 'sabin27' },
    { name: 'Sabina', email: 'sabina@gmail.com', password: 'sabina28' },
    { name: 'Sajan', email: 'sajan@gmail.com', password: 'sajan29' },
    { name: 'Saroj', email: 'saroj@gmail.com', password: 'saroj30' },
    { name: 'Shanti', email: 'shanti@gmail.com', password: 'shanti31' },
    {
        name: 'Srijana',
        email: 'srijana@gmail.com',
        password: 'srijana32'
    },
    { name: 'Subash', email: 'subash@gmail.com', password: 'subash33' },
    { name: 'Suman', email: 'suman@gmail.com', password: 'suman34' },
    { name: 'Sunil', email: 'sunil@gmail.com', password: 'sunil35' },
    { name: 'Sushil', email: 'sushil@gmail.com', password: 'sushil36' },
    { name: 'Urmila', email: 'urmila@gmail.com', password: 'urmila37' },
    { name: 'Yogesh', email: "yogesh@gmail.com", password: "yogesh38" }
]

// function loginUser(email, password) {
// let foundUser = null;

// for (let i = 0; i < db_users.length; i++) {
//     if (db_users[i].email == email && db_users[i].password == password) {
//         foundUser = db_users[i];
//     }
// }

// if (foundUser) {
//     console.log("Login accepted");
// } else {
//     console.log("Invalid Credentials");
// }
// function loginUser(email, password) {
//     let user = db_users.find(user => user.email == email && user.password == password);
//     if (user) {
//         console.log("Login accepted");
//     } else {
//         console.log("Invalid Credentials");
//     }
// }
function loginUser(email, password) {
    let userFound = false;

    for (let i = 0; i < db_users.length; i++) {
        if (db_users[i].email == email && db_users[i].password == password) {
            console.log("Login accepted");
            userFound = true;
            break;
        }
    }

    if (!userFound) {
        console.log("Invalid Credentials");
    }
}

loginUser("yogesh@gmail.com", "yogesh38") // login successful
loginUser("urmila@gmail.com", "urmila37") // login successful
loginUser('sunil@gmail.com', 'suniljn35') // Invalid Credential

/* 
TODO:

    create a function to check the email and password for a user 

    NOTE: we have lots of user , we have to check through each data. 

OUTPUT:

*/

let todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "task one",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "task two",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "task three",
        "completed": true
    }
]
function checkTask(taskTitle) {
    let taskFound = false;
    
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].title === taskTitle) {
            console.log(`${todos[i].title} is ${todos[i].completed ? 'completed' : 'incomplete'}`);
            taskFound = true;
            break;
        }
    }
    
    !taskFound && console.log(`Task with title "${taskTitle}" not found.`);
}

checkTask("task one"); // "task one is incomplete"
checkTask("task two"); // "task two is incomplete"
checkTask("task three"); // "task three is completed"
checkTask("task four"); 
/* 
    there may be hundred of tasks.. 
    ternary operator. 
*/

/* 
    TODO:
    output

*/


// create a function generateEvenNumber 
//     and if we pass an arguement 10,
//     then output should be 2, 4, 6, 8 ,10 

function generateEvenNumber(numbers) {
    let evennumbers = [];
    for (let i = 2; i <=numbers; i += 2) {
        evennumbers.push(i);
    
    }
    console.log("The even numbers are:")
    return evennumbers;
}
console.log(generateEvenNumber(10));









// TODO: 2
// create a function identifyEvenNumber
// if we pass an arguement 2, 
// the result should be yes it is an even number
function identifyEvenNumber(n) {
   if (typeof n !== 'number') {
    console.log("The provided data is not an number.");
   }
   return n %2 === 0? 'Yes, it is an even number.' : 'No, it is not an even number.';
}
console.log(identifyEvenNumber(1));
console.log(identifyEvenNumber("hello"));
console.log(identifyEvenNumber(2));




// if we pass an arguement 1, 
// the result should be No it is not an even number

// if we pass an arguement "hello", 
// the result should be the provided data is not an number. 





/* 

TODO: 
From the above array create an new array of users with email and password 


    OUTPUT should be like following
    [
        { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
        { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
        { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
        { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
        ] 
        
        const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"]
        */
       
       // const users = nepali_Names.map((name, index) => ({
        //     name: name,
        //     email: `${name.toLowerCase()}@gmail.com`,
        //     password: `${name.toLowerCase()}${index}`
        // }));
        
        // console.log(users);
        
        let nepali_Names = ["Aarav", "Aarya", "Aasha", "Anisha"];
        let db_user = []
        for (let index = 0; index < nepali_Names.length;index++) {
            let element = nepali_Names[index]
             db_user.push({
                name: element,
                email: `${element.toLowerCase()}@gmail.com`,
                password: `${element.toLowerCase()}${index}`
             }) 
             }
        console.log(db_user);

