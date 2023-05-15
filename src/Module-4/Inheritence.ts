// class Parent {
//     name: string;
//     age: number;
//     address: string;

//     constructor(name: string, age: number, address: string) {
//         this.name = name,
//             this.age = age,
//             this.address = address

//     }

//     makeSleep(hour: number): string {
//         return `This ${this.name} will sleep for ${hour} `
//     }
// }

// class Student extends Parent {


//     constructor(name: string, age: number, address: string) {
//         super(name, age, address)
//         this.name = name,
//             this.age = age,
//             this.address = address

//     }



// }

// const student1 = new Student('Mr.X', 15, 'Uganda')
// //   const totalSleep = new Student('Alim' , 8 )

// class Teacher extends Parent {
//     designation: String

//     constructor(name: string, age: number, address: string, designation: string) {

//         super(name, age, address)

//         this.designation = designation
//     }
//     makeSleep(hour: number): string {
//         return `This ${this.name} will sleep for ${hour} `
//     }
//     // different
//     takeClass(numberOfClass: number): string {
//         return `This ${this.name} will take ${numberOfClass} class `
//     }

// }

// const teacher1 = new Teacher('Name:Mr. Y', 54, 'USA', 'Professor')
// teacher1.designation

