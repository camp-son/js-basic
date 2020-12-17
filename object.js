'use strict'
const obj1 = {};
const obj2 = new Object();

const my = {name: 'camp-son', age: 30};

my.hasJob = true;
console.log(my.hasJob);

delete my.hasJob;
console.log(my.hasJob);

const obj = {
    name: 'camp-son',
    age: 30,
    job: 'dev'
};

for (const key in obj) {
    console.log(key);
}

const arr = [1, 2, 3, 4, 5];
for (const value of arr) {
    console.log(value);
}

const user1 = {name: 'JYS', age: 30};
const user2 = user1; // Ref 참조

const user3 = {};

for (const key in user1) {
    user3[key] = user1[key];
}
console.log(user3);

const user4 = Object.assign({}, user1);
console.log(user4);

const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);