// let number1 = 100
// let number2 = 2
// let sum = number1 + number2
// console.log(number1, "+", number2, "=", number1 + number2)


// number1 = 50
// number2 = 50
// sum = number1 + number2
// console.log(number1, "+", number2, "=", number1 + number2)
// console.log("the sum of ", number1, " and", number2, "is", sum)

// number1 = 150
// number2 = 50
// sum = number1 + number2
// console.log(number1, "+", number2, "=", number1 + number2)
// console.log("the sum of ", number1, " and", number2, "is", sum)


// function calcsum(params) {
//     let number1 = 100
// let number2 = 2
// let sum = number1 + number2
// console.log(number1, "+" , number2, "=", number1 + number2)
// }
// calcsum()


// function double(input) {
//     // console.log("2 *", input, "=", input*2)
//     console.log(`2 x ${input} = ${input*2}`);
// }
// double(2)
// double(3)
// double(4)
// double(5)

// function sum(input1,input2) {

//     sum= input1+input2,
//     console.log(`${input1} + ${input2} = ${sum}`);
// }
// sum(100,2)

// sum(200,4)
// sum(900,4)



// let fruitsData = [
//     {
//       name: "kiwi",
//       scientificName: "k-wrong-xyz",
//       price: 100,
//     },
//     {
//       name: "orange",
//       scientificName: "k-xyz",
//       price: 50,
//     },
//     {
//       name: "apple",
//       scientificName: "k-xyz",
//       price: 50,
//     },
//   ]

//   console.log("the price of ",fruitsData[0].name, " is ", fruitsData[0].price)
//   console.log("the price of ", fruitsData[1].name, " is ", fruitsData[1].price)
//   console.log("the price of ", fruitsData[2].name, " is ", fruitsData[2].price)


//   function fruitsData(name,price) {

// console.log (`The price of ${name } is  ${price}`);
//   }
//   fruitsData("apple",100)
//   fruitsData("kiwi",200)
//   fruitsData("pineapple",400)



//    global block scope and return in func
let fruitsData = [
  {
    name: "kiwi",
    scientificName: "k-wrong-xyz",
    price: 100,
  },
  {
    name: "orange",
    scientificName: "k-xyz",
    price: 150,
  },
  {
    name: "apple",
    scientificName: "k-xyz",
    price: 50,
  },
];

// function printFruitPrices(data) {
//   data.forEach((fruit) => {
//     console.log(`The ${fruit.name}'s scientificname is ${fruit.scientificName} and price is ${fruit.price}`);
//   });
// }

// // Call the function
// printFruitPrices(fruitsData);
 
// function printFruitPrices(data) {
//   data.forEach((fruit) => {
//     console.log(`the ${fruit.name}'s price is ${fruit.price}`);
//   });
// }
// printFruitPrices(fruitsData);

// function printFruitPrices(fruit) {
//   console.log(`The price of ${fruit.name} is ${fruit.price}`);
  
// }

// printFruitPrices(fruitsData[0]) 
// printFruitPrices(fruitsData[1]) 
// printFruitPrices(fruitsData[2]) 

function printFruitPrices(fruit) {
  let {name,price,scientificName} = fruit
  console.log(`The price of ${name} is ${price}`);
//  / / object destructuring
}

printFruitPrices(fruitsData[0]) 
printFruitPrices(fruitsData[1]) 
printFruitPrices(fruitsData[2]) 





