## 📚 section03-nodeJs-basic


### 🐢 Node.js

- **Node.js**: JavaScript의 실행 환경

<br>

- **package**: Node.js에서 사용하는 프로그램의 단위
  - `npm init`, `npm init -y`로 새로운 패키지를 초기화

<br>

- `package.json`의 `"scripts"`에 스크립트를 설정해 매크로처럼 사용 가능
   복잡한 경로에 있는 파일을 설정한 명령어로 간편하게 실행할 수 있다.

<br>

### 📦 모듈 시스템

- **Module System** : 모듈을 다룰 수 있는 어떠한 시스템
  여러가지 기능을 구현하게 될 때 모듈로 여러가지 파일을 나눠서 개발하게 된다.
    ex) `user.js`, `cart.js`, `payment.js`
    만약 이중에 하나만 오류가 나면 해당 파일의 코드만 수정하면 된다.   

    <br>

    이와 같이 기능별로 나눠진 각각의 js파일들을 **모듈(Module)** 이라는 이름으로 부른다.
    - `user.js` -> `user 모듈`,   
    - `cart.js` -> `cart 모듈`,   
    - `payment.js` -> `payment 모듈`   

    모듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양하느 기능을 제공하는 시스템을 **모듈 시스템(Module System)** 이라고 한다.

    <br>

- **모듈 시스템(Module System)** 의 종류: 
  - **Common Js (CJS)** : 
    - `module.exports`프로퍼티에 내보낼 값들을 객체 안에 담아서 내보낸다. 
    -  내장 함수 `require()`을 사용해 해당 경로에서 내보낸 모듈 객체를 불러온다.
  - **ES Module (ESM)** :