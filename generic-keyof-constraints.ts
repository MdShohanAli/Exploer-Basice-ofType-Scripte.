type PersonType = {
    name: string,
    age: number,
    address: string
};
type newType = "name" | "age" | "address"; // manually 
type newTypeUsingKeyof = keyof PersonType

//  const a:newType = "name"
//  const b: newTypeUsingKeyof='dem'

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    obj[key]
}

const property = getProperty({ name: 'Mr.Y', age: 100 }, "age");

// ({name: "Mr.X" , age:100 } , 'age' )
// const a ={
//     name: "Mr .X" , age:100
// }
// a['age']