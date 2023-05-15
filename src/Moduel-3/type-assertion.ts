// let emni: any;

// emni = "Next level Web developer";

// // right way
// (emni as string).length;
// <string>emni.length;

// function kgToGram(param: string | number): string | number | undefined {
//     if (typeof param === 'string') {
//         const value = parseFloat(param) * 1000;
//         return ` The Converted result is ${value} gram `
//     }
//     if (typeof param === 'number') {
//         const value = param * 1000;
//         return value;
//     }
// }
// //  not right way
// const resultToBeNumber = <number>(1000) as number;
// const resultToBeString = kgToGram("1000") as string;

// // example 2

// type CustomErrorType = {
//     message: string
// }
// try {

// }
// catch (err) {
//     console.log((err as CustomErrorType).message)
//     console.log((err as CustomErrorType).message)

// }
