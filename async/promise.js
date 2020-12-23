'use strict'

const promise = new Promise((resolve, reject) => {
    console.log('doing something...');
    setTimeout(() => {
        resolve('camp-son');
        // reject(new Error('no network'));
    }, 2000);
});

promise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finish !');
});

const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then((num) => num * 2)
    .then((num) => num * 3)
    .then((num) => new Promise((resolve) => {
        setTimeout(() => resolve(num - 1), 1000);
    }))
    .then(console.log);

const getHen = () => new Promise((resolve) => setTimeout(() => resolve('chicken'), 1000));
// const getEgg = (hen) => new Promise((resolve, reject) => setTimeout(() => resolve(`${hen} => Egg`), 1000));
const getEgg = (hen) => new Promise((resolve, reject) => setTimeout(() => reject(`Error! ${hen} => Egg`), 1000));
const cook = (egg) => new Promise((resolve) => setTimeout(() => resolve(`${egg} => Cook`), 1000));

getHen()
    .then(getEgg)
    // .catch(() => {
    //     return 'Bread';
    // })
    .then(cook)
    .then(console.log)
    .catch(console.log);