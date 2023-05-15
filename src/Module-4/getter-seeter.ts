// class BankAccount {
//     public id: number;
//     public name: string;
//     // private can user here  // protected are not good because code are not balance
//     private _balance: number;

//     constructor(id: number, name: string, balance: number) {
//         this.name = name;
//         this.id = id;
//         this._balance = balance;
//     }
//     // use getter without use
//     get balance(): number {
//         return this._balance
//     }
//     // setter
//     set deposit(amount: number) {
//         this._balance = this._balance + amount
//     }
//     // getBalance(): number {
//     //     return this._balance
//     // }

//     // addDeposit(amount: number) {
//     //     this._balance = this._balance + amount
//     // }

// }

// class StudentAccount extends BankAccount {
//     test() {

//     }
// }


// const myAccount = new BankAccount(444, 'persian', 30)
// //  myAccount.getBalance();
// // console.log(myAccount.getBalance());

// // i use it without  call function
// // console.log(myAccount.balance);
// //set value here
// myAccount.deposit = 40
// console.log(myAccount.balance);

