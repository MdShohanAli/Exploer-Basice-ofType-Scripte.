// null ebl type
const searchName = (value: string | null) => {
    if (value === null) {
        console.log('There is nothing to search');

    }
    else {
        console.log('Search');

    }
}
searchName(null)
// unknown type 
const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === "number") {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log('My speed is', (convertedSpeed))

    }
    if (typeof speed === "string") {
        const [value, unit] = speed.split(" ") // ['10' , 'km^-1]

        const convertedSpeed = (parseFloat(value) * 1000) / 3600
        console.log('My speed is', (convertedSpeed));

    }
    else (console.log('There is wrong type')
    )

}
getMyCarSpeed(10)
getMyCarSpeed('10km^-1')
getMyCarSpeed(true)

// never type 
// never return some thing 
function throwError(message: string): never {
    throw new Error(message)
}

throwError(' Bahi error hoyce error ')