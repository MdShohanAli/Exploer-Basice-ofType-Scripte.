// ternary operator 

const age: number = 15

// if (age >= 18) {
//     console.log("yes adult ");

// }

// else (
//     console.log(" No allow  ")

// )

// const isAdult = age >= 18 ? ' Yes ' : " No "
// console.log(isAdult);

//


// Nullish coalescing operator 
// Null and Undefined 

const isAuthenticated = ''; // undefined 
const userName = isAuthenticated ?? "Guest" // // Nullish coalescing operator 
const userName2 = isAuthenticated ? "Guest" : isAuthenticated
console.log({ userName }, { userName2 });

//  extra akta jinis 

type Manus = {
    name: string,
    age: number,
    address: {
        city: "No City",
        road: "No Road",
        home?: "";

    };
}

const manus1: Manus = {
    name: ' manus',
    age: 100,
    address: {
        city: "No City",
        road: "No Road",
    },

}
//example Nullish coalescing operator  

const home = manus1?.address?.home ?? "No Home" // default " No Home "

console.log(home);



