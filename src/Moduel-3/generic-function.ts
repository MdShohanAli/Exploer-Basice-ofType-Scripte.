// // Arrow function

// const createArray = (param:string): string[] =>{
//      return[param]
// }
// const createArray1 =  <T>(param:T): T[]=>{
//     return[param]
// }
// const createArray2 =  <X,Y>(param1: X , param2 :Y): [X , Y]=>{
//     return[param1 , param2]
// }
//  function  createArray3<X,Y>(param1: X , param2 :Y): [X , Y]{
//     return[param1 , param2]
// }
// const  result4 = createArray2<boolean , Array<string>>(false,["USA"])

// const result = createArray('Bangladesh')

// const result2 = createArray1<boolean>(false)

// type Name = {name: string }

// const result3 = createArray1<Name>({name:"Bangladesh"})

// // spread operator


// // const crush = "kate Winslet"
// //      const myInfo = {
// //     name:"Persia",
// //     age:100,
// //     salary: 10000
// //      }

// // const newData = {...myInfo , crush  }
// //
// const addMeInMyCrushMind = <T>(myInfo:T) =>{
//     const crush = "kate Winslet"
//     const newData = {...myInfo, crush}
//     return newData
// }
// const myInfo = {
//      name: "Parsia",
//      age:100,
//      salary:10000
// }
// const result5 = addMeInMyCrushMind(myInfo)
// // result5.
