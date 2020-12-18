'use strict'
const arr1 = new Array();
const arr2 = [1, 2];

const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// looping
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (const fruit of fruits) {
    console.log(fruit);
}
fruits.forEach((fruit) => console.log(fruit));

fruits.push('strawberry');
fruits.push('peach');
console.log(fruits);

fruits.pop();
fruits.pop();

console.log(fruits);

fruits.unshift('strawberry', 'lemon');
console.log(fruits);

fruits.shift();
fruits.shift();
console.log(fruits);

fruits.push('strawberry', 'lemon', 'peach');
console.log(fruits);

// fruits.splice(1, 2);
console.log(fruits);
fruits.splice(1, 1, 'green apple', 'watermelon');
console.log(fruits);

const fruits2 = ['mango', 'grape'];
console.log(fruits.concat(fruits2));

console.clear();
console.log(fruits);
console.log(fruits.indexOf('greenapple'));
console.log(fruits.indexOf('lemon'));
console.log(fruits.indexOf('banana'));

console.log(fruits.includes('mango'));
console.log(fruits.includes('peach'));
console.clear();
fruits.push('apple');

console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));
console.clear();

// Array support methods.
const arr = [7,4,9,2,3,6,1,2,5,0];

console.log(arr.length);
console.log(arr.toString());
console.log(arr.toLocaleString());
console.log(arr.pop());
console.log(arr.push(0));
console.log(arr.concat(100, 300));
console.log(arr.concat([100, 400]));
console.log(arr.join('/'));
console.log(arr.reverse());
console.log(arr.shift());
console.log(arr.slice(1, 5));
console.log(arr.sort());
console.log(arr.splice(3, 1, 7, 4));
console.log(arr.unshift(0));
console.log(arr);
console.log(arr.indexOf(7));
console.log(arr.lastIndexOf(7));
console.log(arr.every((value) => value));
console.log(arr.some((value) => value));
console.log(arr.forEach(console.log));
console.log(arr.map((value) => `-${value}-`));
console.log(arr.filter((value) => value > 5));
console.log(arr.reduce((sum, value) => {
    sum += value;
    return sum;
}));
console.log(arr.reduce((sum, value) => {
    sum += value;
    return sum;
}, 1000));
console.log(arr.reduce((char, value) => {
    char += `${value}`;
    return char;
}, ''));
console.log(arr.reduceRight((prev, curr) => {
    console.log(prev, curr);
}));
