'use strict'
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value > 0 ? value : 0;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

class Field {
    publicField = 2;
    #privateField = 0;

    static member = 'Member !';
    static call() {
        console.log(`Call ${Field.member}`);
    }
}

const field = new Field();
console.log(field.publicField);
console.log(field.privateField);
console.log(field.member);
console.log(field.call);
console.log(Field.member);
Field.call();

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of`);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Rectangle(10, 20, 'red');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(10, 20, 'blue');
triangle.draw();
console.log(triangle.getArea());
