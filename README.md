# Javascript 기본 정리

- [기본 설명](#기본-설명)
- [Script 태그](#script-tag)
    - [기본 사용](#1-default-tag)
    - [Async 속성](#2-async-property)
    - [Defer 속성](#3-defer-property)
- [Strict mode](#strict-mode)
- [변수](#variable)
    - [var와 let 차이](#1-var-vs-let)
    - [불변 상수](#2-constant)
    - [데이터 타입](#3-data-type)
- [함수](#function)
    - [파라미터](#1-parameter)
    - [지역스코프](#2-local-scope)
    - [함수반환](#3-return-a-value)
    - [콜백함수](#4-callback-function)
    - [Arrow Function](#5-arrow-function)
    - [Ref. IIFE](#ref-iifeimmediately-invoked-function-expression)
- [함수](#class)
    - [getter/setter](#1-getter-setter)
    - [public/private](#2-fields-public-private)
    - [static](#3-static-properties-and-methods)
    - [상속 & 다형성](#4-inheritance--polymorphism)
    - [instanceof](#5-instanceof)
    
## 기본 설명
- `동적 타입 언어`으로 타입을 선언하여 변수에 값을 지정하지 않고, 런타임에서 값을 할당하였을 때 타입이 정해진다.
- 프로토 타입을 아주 빠르게 개발할 수 있는 장점이 있지만, 다수가 진행하거나 대형 프로젝트에서는 매우 큰 단점이 된다.

## Script tag
#### 1. Default tag
```html
<script src="main.js"></script>
```
- 파서가 HTML 문서를 파싱하다가 script 태그를 만나면 파싱을 멈추고 해당 파일을 다운로드 한다.
- 다운로드가 완료되면 script 파일 실행하고 실행이 끝나면 파싱을 재개한다.
- body 태그 안 제일 마지막에 있는 경우 보여지는 속도는 빠르지만, 데이터 위주의 페이지인 경우 느리게 보일 수 있다.
#### 2. async property
```html
<script async src="main.js"></script>
```
- 파서가 HTML 문서를 파싱하다가 script 태그를 만나면 다운로드를 하고 파싱은 계속 진행한다.
- 다운로드가 완료되면 파싱을 멈추고 script 파일을 실행한다.
- script 파일 실행이 종료되면 파싱을 재개한다.
#### 3. defer property
```html
<script defer src="main.js"></script>
```
- 파서가 HTML 문서를 파싱하다가 script 태그를 만나면 다운로드를 하고 파싱은 계속 진행한다.
- 파서가 HTML을 모두 파싱하면, 다운로드 된 script 파일을 순차적으로 실행한다.
- 제일 효율적이고 안전하다고 볼 수 있다.

## Strict mode
```js
'use strict'
```
- Javascript는 매우 유연한 언어이지만, 유연함은 때론 위험함이 될 수 있다.
- js 파일 상단에 'use strict'를 선언하게 되면, 문법에 맞지않는 구문에서 오류를 알려준다.
- 자바스크립트 엔진이 효율적으로 분석할 수 있어 성능개선도 될 수 있다.

## Variable
#### 1. `var` vs `let` (read/write)
- ES6 이전까지 var 키워드를 사용하다가 ES6 이후 let 키워드가 추가되었고 기능이 추가되었다.
- `Hoisting` 변수의 선언 위치와 상관없이 최상위로 가져간다.
    ```js
    console.log(name) // undefined
    name = 4;
    var name;
    ```
- `Block scope` 선언된 블록 내에서만 사용할 수 있다. 전역 변수를 최소화 하여야 한다.
    ```js
    {
        let author = 'camp-son';
        console.log(author); // camp-son
    }
    console.log(author); // Error - Uncaught ReferenceError: author is not defined
    ```
#### 2. Constant (read only)
- es6에서 let과 같이 추가된 변수 선언 키워드이다.
- 변수에 값을 할당한 후에 변경이 불가능하다.
- 단, 레퍼런스를 갖는 변수안에 있는 값은 변경할 수 있다.
```js
const value = 'Hello';
// value = 'World'; // Error - Uncaught TypeError: Assignment to constant variable.
```
- **Mutable & Immutable**
    - `Mutable`   데이터는 변경하지 못하지만, 내부에서 가리키고 있는 값을 변경할 수 있는 경우, JS안에 object 형태
    - `Immutable` 데이터 자체를 절대 변경하지 못하는 경우, primitive type 또는 frozen object 
#### 3. Data type
- Primitive type
    - 더 이상 작은 단위로 나눠질 수 없는 한가지 항목
    - `number`, `string`, `boolean`, `null`, `undefined`, `symbol`
    ```js
    let num = 10;
    let str = 'String';
    let bool = true;
    let nullVal = null;
    let undefinedVal = undefined;
    let symbol = Symbol('id');
    ```
- Object type
    - Primitive 항목을 묶어서 한 단위로 묶어서 관리할 수 있는 항목
    ```js
    let obj = {name: 'camp-son', age: 30, married: false};
    let arr = [1, 2, 3, 4];
    ```
- Functional type(first-class function)
    - 다른 변수에 할당 가능하고, 파라미터, 리턴값으로도 사용할 수 있다.
    
## Function
- 프로그램을 구성하는 기본적인 기능 블록이고, 재사용이 가능하다.
- 네이밍 작성시 동사 prefix 선호, 이름 짓기가 어려운 경우 기능 분리
- Named function은 선언 이전에 호출하여도 호이스팅하여 문제가 없지만, Anonymous function은 호이스팅이 되지 않아 선언 이전에 호출할 경우 오류가 발생한다.
- 형태
    ```js
      // Named function
      function name(arg1, arg2) {
          // ... 
          // return; 
      }
      // anonymous function
      const print = function () {
          // ...
      };
    ```
#### 1. Parameter
- 함수 호출시 전달 받을 값
- primitive type인 경우 value가 전달이 되고, object type 인 경우 레퍼런스가 전달된다.
- Default parameter
    ```js
      function func(arg1, arg2 = 'default value')  {
          // ...
      }
  
      func('a') // arg1 = 'a', arg2 = 'default value'
      func('a', 'b') // arg1 = 'a', arg2 = 'b'
    ```
- Rest parameter
    ```js
      function func(...args) {
          for (const arg of args) {
              console.log(arg);
          }   
      }
      func('a', 'b', 'c'); // a b c
      func(1, 2, 3); // 1 2 3 
    ```
#### 2. Local Scope
- 밖에서는 안을 볼 수 없지만, 안에서 밖을 볼 수 있다라는 형태로 알면 된다.
```js
const globalMessage = 'global';
function printMessage() {
    let message = 'Hello';
    console.log(message); // Hello
    console.log(globalMessage); // global
    function printChildMessage() {
        let childMessage = 'World';
        console.log(message); // Hello
        console.log(childMessage); // World
    }
    // console.log(childMessage); // Error
}
// console.log(message); // Error
printMessage();
```
#### 3. Return a value
- 함수의 결과를 반환할 수 있다.
    ```js
      function sum(a, b) {
          return a + b;
      }
  
      console.log(sum(1, 3)); // 4
    ```
- Early return
    - Bad case
        ```js
        function func(amount) {
            if (amount > 10) {
                // logic
            }
        }
        ```
    - Good case
        ```js
        function func(amount) {
            if (amount <= 10) {
                return;
            }
            // logic
        }
        ```
#### 4. Callback function
- 파라미터로 함수를 전달하여, 함수 내에서 전달받은 함수를 실행하도록 한다.
    ```js
      function answerQuiz(question, yes, no) {
          if (question === 'Hello') {
              yes();
          } else {
              no();
          }       
      }
      const yes = function () { console.log('YES !!'); };
      const no = function () { console.log('NO !!'); };
  
      answerQuiz('Bye', yes, no); // NO !!
      answerQuiz('Hello', yes, no); // YES !!
    ```
#### 5. Arrow function
- ES6에서 추가된 새로운 함수 표기 형태
    ```js
      const print = () => console.log('Print');
      const sum = (a, b) => a + b;
  
      print();
      sum(1, 2);
    ```
  
#### Ref. IIFE(Immediately Invoked Function Expression)
- function을 선언과 동시에 실행시키기 위해 사용하는 방법
    ```js
      (function IIFE() {
          console.log('IIFE');    
      })();
    ```
  

## Class
- 데이터의 틀을 정의한다.
- Class에 데이터를 적용하면 object가 된다.
- ES6에서 추가되었다.
- 형태
    ```js
      class Person {
          constructor(name, age) {
              this.name = name;
              this.age = age;
          }
          speak() {
              console.log(`${this.name}: hello !`);
          }    
      }
      const campSon = new Person('camp son', 30);
      campSon.speak();
    ```
#### 1. Getter/ Setter
- 캡슐화를 위해 사용하기도 하고, 원하지 않은 값이 들어왔을 때 처리하기 위해 사용한다.
- 외부에서 클래스 내부에 있는 변수를 직접 컨트롤하지 못하도록 하기 위해서도 사용한다.
    ```js
      class User {
          constructor(name, age) {
              this.name = name;
              this.age = age;
          }
          get age() {
              return this._age;
          }
          set age(value) {
              this._age = value;
          }
      } 
    ```
#### 2. Fields (public, private)
- 클래스에 있는 내부 필드 선언을 #의 유무를 통해 public인지, private인지 구분할 수 있게 해준다.
- 최근 추가된 문법
    ```js
      class Field {
          publicField = 2;
          #privateField = 0;
      }
      const field = new Field();
      console.log(field.publicField); // 2
      console.log(field.privateField); // undefined
    ```
#### 3. Static properties and methods
- 클래스를 생성하지 않고, 직접 접근할 수 있다.
- 클래스 인스턴스가 아닌, 클래스 자체에 선언되어 있는 속성 또는 함수이다.
- 최근 추가된 문법
    ```js
      class Field {
          static member = 'Member !';
          static call() {
              console.log(`Call ${Field.member}`);
          }
      }
      
      const field = new Field();
      console.log(field.member); // undefined
      console.log(field.call); // undefined
      console.log(Field.member); // Member !
      Field.call(); // Call Member !
    ```
#### 4. Inheritance & Polymorphism
- 상속: 부모의 속성과 메서드를 사용할 수 있다.
- 다형성: 상속받은 메서드를 각 클래스에 맞게 변형하거나, 확장할 수 있다.
#### 5. instanceof
- 생성된 인스턴스가 클래스의 인스턴스인지 체크할 수 있다.
- 클래스의 부모 클래스와 비교하면 해당 클래스의 인스턴스와 일치한다.
