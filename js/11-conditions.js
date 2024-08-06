let willRain = false
let hasProbabilty = true // nested if else

if (willRain) {
    console.log("take umbrealla");
} else if (hasProbabilty) {
    console.log("you might need");
}
else {
    console.log("no need to take umbrealla");
}


/* nested if else  */
// let users = [
//     {
//         name: "ram",
//         hasPaidStatus: false,
//         hasScholarship: true
//     },
//     {
//         name: "hari",
//         hasPaidStatus: true,
//         hasScholarship: false
//     },
//     {
//         name: "sita",
//         hasPaidStatus: false,
//         hasScholarship: false
//     },
// ]

/* 
    Output: 

    Ram can give exam
    Hari can give exam
    Sita cannot give exam
*/
let users = [
    {
        name: "ram",
        hasPaidStatus: false,
        hasScholarship: true,
        hasMetAttendence: true,
    },
    {
        name: "hari",
        hasPaidStatus: true,
        hasScholarship: false,
        hasMetAttendence: true,
    },
    {
        name: "sita",
        hasPaidStatus: false,
        hasScholarship: false,
        hasMetAttendence: true,
    },
]
// let student1 = {
//     name: "ram",
//     hasPaidStatus: false,
//     hasScholarship: false
// }


function eligibility(student) {

     if ((student.hasPaidStatus || student.hasScholarship) && student.hasMetAttendence) {
        console.log(`${student.name} can give exams`);
     }
    else {
        console.log(`${student.name} cannot give exams`);
    }
}
eligibility(users[0])
eligibility(users[1])
eligibility(users[2])


