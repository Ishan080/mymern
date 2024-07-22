// let fruits = {
//     name: "kiwi",
//     prices: [
//         {
// country "nepal",
// price = 100},

//  ","US = 1", "cad = 2.5", "UK = 0.8"}]

// }
// fruit1 = {
//     name: "kiwi",
//     scientificName: "k-wrong-xyz",
//     prices: [
//       {
//         country: "nepal",
//         price: 1, // change this to 100
//       },
//       {
//         country: "us",
//         price: 1,
//       },
//       {
//         country: "au",
//         price: 1.5,
//       },
//     ],
//   }
//   fruit1.prices[0].price = 20 
//   console.log(fruit1);
   
let backendResponse = {
    msg: "success",
    result: {
      total: 2,
      data: [
        {
          name: "kiwi",
          scientificName: "k-wrong-xyz",
          prices: [
            {
              country: "us",
              price: 1,
            },
            {
              country: "nepal",
              price: 1, // change this to 100
            },
          ],
        },
        {
          name: "orange",
          scientificName: "k-xyz",
          prices: [
            {
              country: "us",
              price: 2,
            },
            {
              country: "nepal",
              price: 200,
            },
            {
              country: "cad",
              price: 200,
            },
          ],
        },
      ],
    },
  }
  backendResponse.result.data[0].prices[2] = {country: "canada",price: 400 }
  console.log(backendResponse);

  let n,a;
  n = 1;
  a = 2;
  sum = n + a
  
  console.log("1 + 2","=", sum);

  console.log("5 + 4","=", sum);