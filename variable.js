// 1. Use strict
// added in ES 5
// use this for Vanilla Javascript
'use strict';

// 2. Variable
{
    let test = 'camp-son';
    console.log(test);
    test = 'Hello World!';
    console.log(test);
}
// console.log(test);

// var (don't ever use this)
// hoisting
age = 4;
var age;

// number type
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

console.log(`Infinity ${1 / 0}`);
console.log(`Negative infinity ${-1 / 0}`);
console.log(`Not A Number ${'dasf' / 10}`);

// bigInt - 아직 chrome, safari 사용가능
const bigInt = 123456789012345678901234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, typeof: ${typeof bigInt}`);

// Dynamic typing
let text = 'test';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); // break !!