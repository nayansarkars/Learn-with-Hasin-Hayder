function add(a: number, b: number) : number
{
    return a + b;
}
function subtract(a: number, b: number) : number
{
    return a - b;
}
function multiply(a: number, b: number) : number
{
    return a * b;
}

function divide(a: number,b: number): number
{
    if(b ==0)
    {
        throw new Error("Division by zero is not allowed");
    }
    return a/b;
}

console.log("add(2,3) = ", add(2,3));
console.log("subtract(5,2) = ", subtract(5,2));
console.log("multiply(4,3) = ", multiply(4,3));
console.log("divide(10,2) = ", divide(10,2));