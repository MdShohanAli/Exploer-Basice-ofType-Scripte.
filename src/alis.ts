//alias type declare 

type CrushType = {
    name: string,
    age?: number, // optional type 
    profession: string,
    address: string
}

const cursh1: CrushType = {
    name: 'Fawzia',
    age: 25,
    profession: 'Web developer',
    address: 'bd'
}

const crush2: CrushType = {
    name: 'ruma',
    profession: 'next level web developer',
    address: 'bd bheramara'
}

type CrushMarriedType = boolean;
const CrushMarried: CrushMarriedType = false;

type CourseNameType = string;

const courshName: CourseNameType = 'Next Level ';

// function 

type OpearationType = (x: number, y: number) => number
const calculate = (
    number1: number, // 10
    number2: number, // 20
    operation: OpearationType // (x,y)=> x + y (10 , 20 ) => 10 + 20 

) => {
    return operation(number1, number2)
}

calculate(10, 20, (x, y) => x + y);
calculate(20, 40, (x, y) => x - y);