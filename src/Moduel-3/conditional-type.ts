// a type is dependent on another type 

type a1 = string;
type a3 = undefined;
type a4 = number;

type a2 = a1 extends string ? string : null

//

type Bandhobi = 'Monika' | "Rechel" | "Paanam"

type removeBandobi<T, K> = T extends K ? never : T

type currentandhobi = removeBandobi<Bandhobi, 'Monika'>