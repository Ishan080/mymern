let user = 
    {
    name: "ram",
    email: "ram@ram.com",
    password: "ram-password"
}

function checkPassword(email, password) {
    if (user.email == email && user.password == password) {
        console.log(`login accepted `)
    }
    else {
        console.log(`Invalid Credentials`);
    }
}
checkPassword("ram@ram.com", "ram-password")   // user logged in 
checkPassword("ram@ram.com", "ram-wrong-password")   // Invalid Credentails
checkPassword("shafdyam@shyam.com", "ram-password")   // Invalid Credentails

