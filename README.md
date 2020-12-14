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
    - [가변성변수와 불가변성변수](#3-mutable--immutable)
    - [데이터 타입](#4-data-type)
    
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
#### 1. `var` vs `let`
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
#### 2. Constant
- es6에서 let과 같이 추가된 변수 선언 키워드이다.
- 변수에 값을 할당한 후에 변경이 불가능하다.
- 단, 레퍼런스를 갖는 변수안에 있는 값은 변경할 수 있다.
```js
const value = 'Hello';
// value = 'World'; // Error - Uncaught TypeError: Assignment to constant variable.
```
#### 3. Mutable & Immutable
- TODO
#### 4. Data type
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
    - TODO
