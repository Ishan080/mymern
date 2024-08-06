const sum = (input1, input2) => {
    return input1 + input2
}
console.log(sum(22, 23));






// let randomAgeIndex = Math.floor((Math.random())* ages.length)
// let randomreligionsIndex = Math.floor((Math.random())*religions.length)
// let randomethnicitiesIndex = Math.floor((Math.random())*ethnicities.length)

// let users = {
//     name: "ram",
//     age: ages[randomAgeIndex],
//     religion: religions[randomAgeIndex],
//     ethnicity: ethnicities[randomethnicitiesIndex]
// }
// console.log(users);
let names = ["ram", "shyam", "hari"]
let ages = [10, 20, 30, 40, 50]
let religions = ["hindu", "buddhist", "christian", "muslim", "others"]
let ethnicities = ["bhramin", "chhetri", "newar", "others"]

let fakeUsers = []
function getRandomValueFromArray(arr) {
    let randomIndex = Math.floor((Math.random()) * arr.length)
    let randomElement = arr[randomIndex]
    return randomElement
}

for (let index = 0; index < names.length; index++) {
    fakeUsers.push({
        name: names[index],
        age: getRandomValueFromArray(ages),
        religion: getRandomValueFromArray(religions),
        ethnicity: getRandomValueFromArray(ethnicities)
    }
    )
}
console.log(fakeUsers)


// let randomages = Math.floor((Math.random()) * ages.length)
// let randomreligions =  Math.floor((Math.random()) * religions.length)
// let randomethnicities =   Math.floor((Math.random()) * ethnicities.length)
/*
//  ages:  ag = Math.floor(Math.random() * ages.length)
    Math.random()   //  0 to 1
    Math.random() * 5   //  0 to 5 // never prints 5
    Math.floor()   // 1.2  => 1
*/


/*
    [
        {
            name:"ram"
            age:
            religion:
            ethnicity:
        },
        {
            name:"shyam"
            age:
            religion:
            ethnicity:
        },
        {
            name:"hari"
            age:
            religion:
            ethnicity:
        },
    ]

*/


/* first do for single user */
// let user = {
//     name:"ram"
// }