// // Arrow function

// const createArray = (param: string): string[] => {
//     return [param]
// }
// const createArray1 = <T>(param: T): T[] => {
//     return [param]
// }
// const createArray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
//     return [param1, param2]
// }
// function createArray3<X, Y>(param1: X, param2: Y): [X, Y] {
//     return [param1, param2]
// }
// const result4 = createArray2<boolean, Array<string>>(false, ["USA"])

// const result = createArray('Bangladesh')

// const result2 = createArray1<boolean>(false)

// type Name = { name: string }

// const result3 = createArray1<Name>({ name: "Bangladesh" })

// // spread operator


// // const crush = "kate Winslet"
// //      const myInfo = {
// //     name:"Persia",
// //     age:100,
// //     salary: 10000
// //      }

// // const newData = {...myInfo , crush  }
// //
// type MandatoryTypes = { name: string, age: number, salary: number }
// interface MandatoryInterface { name: string, age: number, salary: number }
// const addMeInMyCrushMind = <T extends MandatoryInterface>(myInfo: T) => {
//     const crush = "kate Winslet"
//     const newData = { ...myInfo, crush }
//     return newData
// }
// type MyInFoType = {
//     name: string,
//     age: number,
//     salary: number;
//     other1: boolean;
//     other2: null
// }
// const myInfo: MyInFoType = {
//     name: "Parsia",
//     age: 100,
//     salary: 10000,
//     other1: false,
//     other2: null
// }
// const result5 = addMeInMyCrushMind(myInfo)


