let userInput: unknown;
let userName: string;

userInput = 0;
userInput = "sdln";


// with userInput of type unknown, TS string var, can not hold unknown
// with userInput of type any, TS string var can contain any: as TS don't care

if(typeof userInput === 'string'){
    userName = userInput;
}

function generateError(message: string, code:number):never{
    throw {message:message,errorCode: code};
}
const result = generateError('An error occurred',500);
console.log(result);
console.log("");

const button = document.querySelector('button')!;
button.addEventListener('click',()=>{
    console.log('Clicked');
});