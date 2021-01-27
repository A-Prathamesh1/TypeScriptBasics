function adder(n1:number,n2:number,showResults:boolean,phrase:string){
    console.log(typeof(number1));

    const result = n1 + n2;
    if(showResults){
    console.log(phrase +  result);
    }
    else{
        return n1 + n2;
    }
}
let number1 = 2;
const number2 = 4;
const printResults = true;
const resultPhrase = 'Result is: ';

adder(number1,number2,printResults,resultPhrase);
// console.log(result);