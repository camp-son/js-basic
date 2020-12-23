'use strict'

class UserStorage {
    loginUser(id, pw) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id === 'camp-son' && pw === 'study') {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'camp-son') {
                    resolve({name: 'JYS', role: 'admin'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const user = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password')

user.loginUser(id, password)
    .then(user.getRoles)
    .then((role) => alert(`Hello ${role.name} is ${role.role}`))
    .catch(console.log);