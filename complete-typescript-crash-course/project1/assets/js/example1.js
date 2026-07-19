function divid(a, b) {
    if (b == 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}
function multiply(a, b, c) {
    return a * b * c;
}
const result = divide(7, 2);
console.log(result.toFixed(2)); //Output: 5.00
