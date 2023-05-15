// type Alphaneumeric = string | number
// //  key of guard
// function add(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {
//     if (typeof param1 == "number" && param2 === "number") {
//         return param1 + param2
//     }
//     else {
//         return param1.toString() + param2.toString()
//     }
// }

// add('1', '2')
// add(1, 2)


// // in  guards
// type NormalUserType = {
//     name: string
// }

// type AdminUserType = {
//     name: string
//     role: 'admin'
// }

// function getUser(user: NormalUserType | AdminUserType) {
//     if ('role' in user) {
//         return `i am admin and my role is ${user.role}`

//     }

//     else {
//         return ' i am a normal user '
//     }
// }

// const NormalUser1: NormalUserType = { name: 'Mr.kalu' }
// const AdminUser2: AdminUserType = { name: 'Mr.galu', role: 'admin' }
// console.log(getUser(AdminUser2));

// // instaceof gurd
// // for class and object

// class Animals {
//     name: string;
//     species: string;
//     constructor(name: string, species: string) {
//         this.name = name
//         this.species = species
//     }
//     makeSound() {
//         console.log(' I am making sound ');
//     }
// }

// class Dogs extends Animals {
//     constructor(name: string, species: string) {
//         super(name, species)
//     }
//     makeBark() {
//         console.log(' i am barking');

//     }
// }
// class Cats extends Animals {
//     constructor(name: string, species: string) {
//         super(name, species)
//     }
//     makeMeaw() {
//         console.log('make meaw meaw');

//     }
// }
// // another way --------
// function isDog(animal: Animals): animal is Dogs {
//     return animal instanceof Dogs
// }
// function isCat(animal: Animals): animal is Cats {
//     return animal instanceof Cats
// }

// // -------------
// function getAnimal(animal: Animals) {
//     if (animal instanceof Dogs) {
//         animal.makeBark()
//     }
//     else if (isCat(animal)) {
//         animal.makeMeaw()
//     }
//     else {
//         animal.makeSound()
//     }
// }
// const animal1 = new Dogs(' Garma Bahi', 'dog ') // --instance -> Dog
// const amimal2 = new Cats('Pershies Bhai', 'cat')

// getAnimal(amimal2)
