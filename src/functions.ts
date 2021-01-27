function add(n1:number,n2:number):number{
    return n1 + n2 ;
}
function printResult(num:number):void{
   console.log('result: ' + num) ;
   return;
}

function addAndHandle(n1:number,n2:number,cb:(num:number)=>void){
    const result = n1 + n2;
    cb(result);

}

console.log(printResult(add(5,12)));

let combineValues: (a:number,b:number) => number; //function type

combineValues = add;

console.log(combineValues(10,20));

addAndHandle(21,21,(result)=>{
    console.log(result);
});
