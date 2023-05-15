// class BankAccount {
//    public id: number;
//    public name: string;
//    // private can user here  // protected are not good because code are not balance
//     protected _balance: number;

//     constructor(id: number, name: string, balance: number) {
//         this.name = name;
//         this.id = id;
//         this._balance = balance;
//     }
//     getBalance() {
//         console.log(`My Current Balance is ${this._balance}`);
//     }

//     addDeposit(amount: number) {
//         this._balance = this._balance + amount
//     }

// }

// class StudentAccount extends BankAccount{
//    test(){
//     this._balance
//    }
// }


// const myAccount = new BankAccount(444, 'persian', 20)
 // myAccount.addDeposit(20)
// myAccount.getBalance()

// console.log(myAccount);

// // note
//  // public use not mendatory  but when we use parameter than can use it
//  // private  /  readonly  we can use 