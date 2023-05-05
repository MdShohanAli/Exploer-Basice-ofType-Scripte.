// function  normal 
function adds(num1: number, num2: number = 20): number {
    return num1 + num2
}

adds(30, 50)

//spread operator
const myFriends = [' keayli ', ' joey ', 'ross']
const newFriends = ['monica', 'rachel', 'pheoba']

const myBestFriend = {
    fullName: "Abul Basar",
    age: 24
};

// destructing ts 
const [bestFriend] = myFriends;
const { fullName } = myBestFriend

myFriends.push(...newFriends)

// console.log(myFriends);

// rest parameter
// const greetFriend = (
//     friend1: string,
//     friend2: string,
//     friend3: string,

// ): void => console.log(`Hi ${friend1}\n Hi ${friend2} \n Hi ${friend3}`);

// rest operator argument pass 
const greetFriend = (...friends: string[]): void => friends.forEach((friend) => console.log((` Hi ${friend}`)))


greetFriend('hasem', 'kasem', 'gasham');

const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 4, 5]

const newArray = arr.map((ele: number) => ele * ele)

const person: {
    name: string,
    balance: number,
    addBalance(money: number): void
} = {
    name: 'shohan',
    balance: 5,
    addBalance(money: number) {
        console.log(`My New Balance is ${this.balance + money} `)
    },
}

// z


