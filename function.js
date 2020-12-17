'use strict'
function printHello() {
    console.log('Hello');
}

printHello();

function log(message) {
    console.log(message);
}

log('Camp son');
log('Hello world');
log(2000);

func();

function func() {
    console.log('Func !!');
}

// print();
let print = function () {
    console.log('Print !!');
};
print();

// Quiz
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder
const calculate = (command, a, b) => {
    switch (command) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw new Error(`Not supported command :: [${command}]`);
    }
};

console.log(calculate('add', 1, 3));
console.log(calculate('subtract', 1, 3));
console.log(calculate('divide', 1, 3));
console.log(calculate('multiply', 1, 3));
console.log(calculate('remainder', 1, 3));
// console.log(calculate('any', 1, 3));