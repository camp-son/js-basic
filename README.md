# js-basic
Javascript basic
## Load script
1. Default
    - 파서가 HTML 문서를 파싱하다가 script 태그를 만나면 파싱을 멈추고 해당 파일을 다운로드 한다.
    - 다운로드가 완료되면 script 파일 실행하고 실행이 끝나면 파싱을 재개한다.
    - body 태그 안 제일 마지막에 있는 경우 보여지는 속도는 빠르지만, 데이터 위주의 페이지인 경우 느리게 보일 수 있다.
2. async property
    - 파서가 HTML 문서를 파싱하다가 script 태그를 만나면 다운로드를 하고 파싱은 계속 진행한다.
    - 다운로드가 완료되면 파싱을 멈추고 script 파일을 실행한다.
    - script 파일 실행이 종료되면 파싱을 재개한다.
3. defer property
    - 파서가 HTML 문서를 파싱하다가 script 태그를 만나면 다운로드를 하고 파싱은 계속 진행한다.
    - 파서가 HTML을 모두 파싱하면, 다운로드 된 script 파일을 순차적으로 실행한다.
    - 제일 효율적이고 안전하다고 볼 수 있다.
    
## Data type
1. Use strict
    - Javascript는 매우 유연한 언어이지만, 유연함은 때론 위험함이 될 수 있다.
    - js 파일 상단에 'use strict'를 선언하게 되면, 문법에 맞지않는 구문에서 오류를 알려준다.
    - 자바스크립트 엔진이 효율적으로 분석할 수 있어 성능개선도 될 수 있다.
2. Variable(Mutable)
    - var(ES6 이전) vs let(ES6 부터)
    - 변수 선언 - 메모리가 할당 됨.
    - 변수 값 할당 - 메모리에 값 저장
    - Block scope
        - { } 블록 내에서만 사용할 수 있다.
        - Global 변수는 최소한으로 사용
    - var를 사용하면 안되는 이유
        - `Hoisting` 선언 위치와 상관없이 최상위로 가져온다.
            ```ts
console.log(name) // undefined
name = 4;
var name;
            ```
        - `Block scope 미제공` 변수를 어디서든 사용할 수 있다.
3. Contants(Immutable)
    - 변수와 같이 메모리 할당이 되지만, 초기값을 변경할 수 없다.
    - 보안, 스레드의 안정화
4. Variable type
    - Primitive type
        - 더 이상 작은 단위로 나눠질 수 없는 한가지 항목
        - `number`, `string`, `boolean`, `null`, `undefined`, `symbol`
    - Object type
        - Primitive 항목을 묶어서 한 단위로 묶어서 관리할 수 있는 항목
    - Function type
        - 다른 변수에 할당 가능하고, 파라미터, 리턴값으로도 사용할 수 있다.
        - first-class function
5. Dynamic typing
    - 동적 타입 언어
    - 프로토 타입을 만들 땐 매우 유용하다.
    - 자바스크립트는 런타임에서 값이 할당되며 타입이 결정된다.
    
            
        