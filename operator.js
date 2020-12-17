'use strict'
// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals 1 + 2 = ${1 + 2}`);

// 2. Operators
// 사칙 연산 + - / * % **
console.log('+ ', 1 + 2);
console.log('- ', 2 - 3);
console.log('/ ', 1 / 2);
console.log('* ', 5 * 2);
console.log('% ', 1 % 2);
console.log('**', 3 ** 3);

// 증감 연산 ++ --
let counter = 1;
let savedCounter;
savedCounter = ++counter;
console.log('pre ++ ', counter, savedCounter);
savedCounter = counter++;
console.log('post++ ', counter, savedCounter);
savedCounter = --counter;
console.log('pre -- ', counter, savedCounter);
savedCounter = counter--;
console.log('post --', counter, savedCounter);

// 할당 연산 += -= *= /=
let x = 2;
let y = 10;
y += x;
console.log('+=', y);
y -= x;
console.log('-=', y);
y *= x;
console.log('*=', y);
y /= x;
console.log('/=', y);

// 비교 연산 < <= > >=
console.log('< ', 5 < 10);
console.log('<=', 5 <= 10);
console.log('> ', 5 > 10);
console.log('>=', 5 >= 10);

// 로직 연산 || (or), && (and), ! (not)
const check1 = true;
const check2 = 1 > 2;
const check3 = () => {
    for (let i = 0; i < 10; i++) {
        console.log('check long time');
    }
    return true;
};

console.log('||', check1 || check2 || check3());
// console.log(check3() || check1 || check2);
console.log('&&', check1 && check2 && check3());
console.log('! ', !check1);

// 동일 연산 loose equality (== !=), strict equality (=== !==)
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 조건 연산 if, else if, else
const gender = 'woman';

if (gender === 'woman') {
    console.log('Woman !!');
} else if (gender === 'man') {
    console.log('Man !!');
} else {
    console.log('What !?');
}

// 삼항 연산 condition ? true : false
console.log(gender === 'man' ? 'Oh, no !!' : 'Pass ~');
// switch
const type = 'INTEGER';
switch (type) {
    case 'CHAR':
    case 'STRING':
        console.log('a, b, ab, ...');
        break;
    case 'NUMBER':
    case 'INTEGER':
        console.log('1, 2, ...');
        break;
    case 'BOOLEAN':
        console.log('true / false');
        break;
    default:
        console.log('Not support type');
}

// Loop - while, do while, for
let i = 3;

while (i > 0) {
    console.log('while    i', i);
    i--;
}

do {
    console.log('do while i', i);
    i--;
} while (i > 0);

for (let i = 0; i < 10; i++) {
    console.log('for', i);
}
