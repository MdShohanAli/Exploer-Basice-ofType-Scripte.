const arrayOfNumber = [1, 2, 3]

const arrayOfString = arrayOfNumber.map((number) => number.toString());

type Volume = {
    height: number;
    width: number;
    depth:number
};
type Area = {
    [key in keyof Volume]: Volume 
}

type AreaReadOnly = {
    readonly height: number;
    readonly width:number, 
}

type A = AreaNumber['height'] // look up file
type B = keyof AreaNumber;  // 'width' |  'height'

const rectangularArea: AreaReadOnly  = {
    height:10,
    width:12
}
type Area = {
   [key in 'height' | 'width']: string  
}

type AreaString = {
    height: string ;
    width: string
}
rectangularArea.width=10


// const obj = {
//     name: 'Persia'
// }
// obj['name']