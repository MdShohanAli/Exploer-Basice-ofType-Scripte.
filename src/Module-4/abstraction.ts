// interface (for object )

// interface IVehicle {
//     name:string
//     model: string
// }

// const vehicle:  IVehicle = {
//     name: 'car',
//     model:'2000'

// }

// interface IVehicle {
//     startEngine(): void
//     stopeEngine(): void
//     move(): void
// }

// class vehicles implements IVehicle {
//     constructor(
//         public name: string,
//         public brand: string,
//         public model: number) { }
//     test(): void {
//         console.log('I am for testing purpose');
//     }

//     startEngine(): void {
//         console.log(' I am starting engine');

//     }
//     stopeEngine(): void {
//         console.log(' i am stop engine');

//     }
//     move(): void {
//         console.log('I am moving engine');

//     }
// }

// const vehicle1 = new vehicles('atlas', 'toyota', 2000)
// console.log(vehicle1);

// abstract class 

abstract class vehicles {
  constructor(
    public name: string,
    public brand: string,
    public model: number) { }
  test(): void {
    console.log('I am for testing purpose');
  }

  abstract startEngine(): void
  abstract stopeEngine(): void
  move(): void {
    console.log('I am moving engine');

  }
}

class Car extends vehicles {
  startEngine(): void {
    console.log('start engine');

  }
  stopeEngine(): void {
    console.log('stope engine ');

  }
}








