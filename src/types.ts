enum Role {ADMIN="ADMIN", READ_ONLY= 10, AUTHOR = "AUTHOR"};
const person = {
    name:"prat",
    age:28,
    hobbies:['browsing','Cooking'],
    role:Role.ADMIN
};


// person.role[0] = 10;


let favActivities: string[];

favActivities = ['games']

console.log("Person Object " + person);

for(const hobby of person.hobbies){
    console.log(hobby.toLowerCase());
}

if(person.role === Role.AUTHOR){
    console.log("is author");
}else{
    console.log(person.role);
}