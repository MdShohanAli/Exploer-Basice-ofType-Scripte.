type NobeDeveloper = {
    name: string
};

// type juniorDeveloper = {
//     name: string,
//     expertise: string,
//     experience: number
// }
// intersction type 
type JuniorDeveloper = NobeDeveloper & {
    expertise: string,
    experience: number
}
// enum  type
//  enum Level {
//     junior='junior',
//     mid='mid',
//     senior='senior'


// }
// here  we declare intersection type
type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    level: 'junior' | 'mid' | 'senior',
}
// union type 
const newDeveloper: JuniorDeveloper | NobeDeveloper = {
    name: "Moznu Mia",
    expertise: 'js',
    experience: 1
}

const developer: NextLevelDeveloper = {
    name: 'Next Vai ',
    expertise: "ts",
    experience: 2,
    leadershipExperience: 1,
    level: 'mid'


}
