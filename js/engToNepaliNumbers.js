

let dashboard = {
    total: 100,
    expired: 24,
    out_of_stock: 20
}

let nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

function convertToNepaliDigits(number) {
    let numberString = number.toString();
    let nepaliNumberString = "";
    
    for (let i = 0; i < numberString.length; i++) {
        let digit = numberString[i];
        nepaliNumberString += nepali_digits[digit];
    }
    
    return nepaliNumberString;
}

dashboard.total = convertToNepaliDigits(dashboard.total);
dashboard.expired = convertToNepaliDigits(dashboard.expired);
dashboard.out_of_stock = convertToNepaliDigits(dashboard.out_of_stock);

console.log(dashboard);
/*

TODO: CONVERT THE  VALUES OF ABOVE OBJECT TO NEPALI 

__________________________________________________________________________________________________




You may need these concepts
    number.toString()
    string.trim()
    string.split()
    loop
    function


__________________________________________________________________________________________________

OUTPUT SHOULD BE AS BELOW

    dashboard = {
        total: "१००"
        expired: "२४",
        out_of_stock: "२०"
    }

    
*/

