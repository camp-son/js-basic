'use strict'
console.log(1);

// Web API, 브라우저에서 제공
// Async
setTimeout(() => {
    console.log(2);
}, 1000);

console.log(3);

function printImmediately(print) {
    print();
}

printImmediately(() => console.log('PRINT~~'));

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('DELAY~~'), 2000);

class UserStorage {
    loginUser(id, pw, onSuccess, onError) {
        setTimeout(() => {
            if (id === 'camp-son' && pw === 'study') {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'camp-son') {
                onSuccess({name: 'JYS', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const user = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password')

user.loginUser(id, password, (user) => {
    user.getRoles(user, (role) => {
        alert(`Hello ${role.name} is ${role.role}`)
    }, (error) => {
        console.log(error);
    });
}, (error) => {
    console.log(error);
});