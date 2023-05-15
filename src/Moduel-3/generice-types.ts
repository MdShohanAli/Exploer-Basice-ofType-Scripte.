// // generic interface 

// interface CrushInterface<T, U = null> {
//     name: string
//     husband: T
//     wife?: U;
// }

// const crush1: CrushInterface<boolean> = {
//     name: "Kate WinSlate",
//     husband: true
// }

// const cursh2: CrushInterface<string> = {
//     name: 'Kate winslet',
//     husband: "Persia"
// }


// interface HusbandINterface {
//     name: string,
//     salary: number
// }
// interface PersonInterface {
//     name: string
//     age: number
// }

// const crush3: CrushInterface<HusbandINterface> = {
//     name: "kate winslet",
//     husband: {
//         name: "Parsiea",
//         salary: 0.222
//     }
// }
// const crsuh4: CrushInterface<PersonInterface, PersonInterface> = {
//     name: 'kate',
//     husband: {
//         name: "Persia",
//         age: 30
//     },
//     wife: {
//         name: "winslate",
//         age: 40
//     }
// }

// type GenericTuple<X, Y> = [X, Y]
// type GenericArray<T> = Array<T>

// const relation: GenericTuple<string, string> = ["paris", "Kate"]
// // type relationWithSalaryType =
// //     { name: string, salary: number }

// interface relationWithSalaryInterface {
//     name: string;
//     salary: number;
// }

// const relationWithSalary: GenericTuple<relationWithSalaryInterface, string> = [
//     {
//         name: "Persian",
//         salary: 1000000
//     },
//     'some'

// ]
// const relationWithSalary2: GenericTuple<relationWithSalaryInterface, string> = [
//     {
//         name: 'sha',
//         salary: 1000000
//     },
//     'some'

// ]


// const rollNumber: GenericArray<number> = [44, 12, 20]
// const rollNumber2: Array<string> = ['33 ', ' 44', '55']
// const rollNumber3: Array<boolean> = [true, false];
// type NameRollType = { name: string; roll: number }
// const userNameAndRollNumber: GenericArray<NameRollType> = [

//     {
//         name: "Mr.X",
//         roll: 1
//     }
//     ,
//     {
//         name: "Mr.Y",
//         roll: 2
//     }
// ]