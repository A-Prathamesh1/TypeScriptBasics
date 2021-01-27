type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(input1:Combinable,
                input2:Combinable,
                resultConversion: ConversionDescriptor//literal types
                ){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
        
    }else{
        result = input1.toString() + input2.toString();        
    }
    
    return result;
    
}
let combineNumAges = combine(20, "abc",'as-number');
console.log(combineNumAges);

let combinefullNumName = combine("20", "90",'as-text');
console.log(combinefullNumName);

let combinefullStringName = combine("prat"," loves life",'as-text');
console.log(combinefullStringName);

console.log("Typescript is awesome");
