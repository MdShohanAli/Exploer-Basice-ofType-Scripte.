type NobeDeveloper = {
    name: string
};

type juniorDeveloper = {
    name: string,
    expertise: "js",
    experience: number
}
const newDeveloper: juniorDeveloper | NobeDeveloper = {
    name: "Moznu Mia",
    expertise: 'js',
    experience: 1
} 
