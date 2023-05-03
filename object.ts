// object declare 

const user: {
    //readonly 
    readonly salary: number,
    // literal type

    company: 'ph bd',
    // --------------
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string
} =
{
    salary: 50000,
    // literal type
    company: 'ph bd',
    // ---------
    name: 'Montu Mia',
    age: 52,
    isMarried: true,
    //  wife key value does,t  declare but no array because ternary oparator declair  
    // wife:'abc'
}
// can change but r
// user.company='abcd '

// can not change because read only property
// user.salary=4000
