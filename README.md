## 📚 React-Hyungjin
   
   
- [x] 섹션.03 - JavaScript 심화 :   
  - 🔗 [section02/js](https://github.com/One-Bite-React-Study/One-Bite-React-Study/tree/hyungjin/section02-javascript-advanced/js)
  
<br>

- [x] 섹션.04 - Node.js 기초 :   
  - 🔗 [section03.md](https://github.com/One-Bite-React-Study/One-Bite-React-Study/blob/hyungjin/section03-nodeJs-basic/section03.md)

<br>

- [x] 섹션.05 - React.js 개론 :   
  - 🔗 [section04.md](https://github.com/One-Bite-React-Study/One-Bite-React-Study/blob/hyungjin/section04-ReactJs-introduction/section04.md)

<br>

- [x] 섹션.06 - React.js 입문 :   
  - 🔗 [section05.md](https://github.com/One-Bite-React-Study/One-Bite-React-Study/blob/hyungjin/section05-reactJs-practice/section05.md)

<br>

- [x] 섹션.07 - 프로젝트1. 카운터 앱 :   
  - 🔗 [section06.md](https://github.com/One-Bite-React-Study/One-Bite-React-Study/blob/hyungjin/section06-counter-app/section06.md)

<br>

- [x] 섹션.08 - 라이프사이클 :   
  - 🔗 [section07.md](https://github.com/One-Bite-React-Study/One-Bite-React-Study/blob/hyungjin/section07-lifecycle/section07.md)

<br>

- [x] 섹션.09 - 프로젝트2. 투두리스트 CRUD
    - 🐣 **Create** :   
    [Create - add To do](https://github.com/One-Bite-React-Study/One-Bite-React-Study/commit/bc752b7d9d11207a06623d78d966e76f131e2feb)   
      - input에 값을 입력 후 해당 값을 최상위 부모 컴포넌트 `state`에 추가하기

      - 입력값이 빈 값일 경우 방지 처리

      - `onKeyDown` 이벤트로 엔터 키를 누를 시 입력 데이터가 추가되도록 구현

    <br>

    - 👀 **Read** :   
    [Read - To do list rendering 1](https://github.com/One-Bite-React-Study/One-Bite-React-Study/commit/8ac13de728d742ff36368c9c4d0decbc85ad1d5a)   
      - 저장된 데이터를 화면에 렌더링해 뿌리기   
      - input 입력값과 데이터 값들과 비교해 포함된 값을 필터링해 화면에 렌더링 해주기           
      
      <br>

      [Read - To do list rendering 2](https://github.com/One-Bite-React-Study/One-Bite-React-Study/commit/e7045c64d8df0ab3f2e4ef8e884a59367ef78fb9)   

      ```
      1. input에 onChange가 실행될때 마다 해당 값을  `search` state에 설정

      2. 컴포넌트가 리렌더링될 때 마다 실행되어 todos 값을 필터링할 함수 `getFilteredData` 선언
        2.1. 만약 `search`가 빈 문자열이면 `todos`를 반환
        2.2. `search` state가 변경되어 해당 컴포넌트가 리렌더링(Update)될 때 마다 `todos`를 필터링해서 반환

      3. 컴포넌트가 리렌더링(Update) 될 때 마다 다시 실행되므로 필터링된 반환 값을 화면에 뿌려준다.

      ```

    <br>

    - 🔄 **Update** :   
    [Update - Modifying To do](https://github.com/One-Bite-React-Study/One-Bite-React-Study/commit/02cc31732d484eed9138209d8f9b8dbd99d3cddd)   
      
      ```
        1. `<TodoItem/>`컴포넌트의 체크 박스를 클릭했을 때 실행할 동작을 함수로 선언해서
           `todos` 데이터를 변경해야 하므로 최상위 부모 컴포넌트 `<App/>`에서   선언해 `props`로 넘기고 넘겨서
           `<List/>` -> `<TodoItem/>` 컴포넌트에 넘긴다.

        2. 해당 `<TodoItem/>`의 체크박스를 클락할 때 `todos` 데이터에서
           해당 `<TodoItem/>`의 id값과 일치하는 요소를 찾아서
          `isDone` 속성을 not 연산자로 반전시켜서 새로운 데이터로 재설정해준다.
      ```

    <br>
    
    - 🗑️ **Delete** :   
    [Delete To do](https://github.com/One-Bite-React-Study/One-Bite-React-Study/commit/bc445f00237a6a53ff5771212831324d3761414b)   

      ```
        1. `<TodoItem/>`컴포넌트의 삭제 버튼을 클릭했을 때 실행할 동작을 함수로 선언해서
           `todos` 데이터를 변경해야 하므로 최상위 부모 컴포넌트 `<App/>`에서 선언해 `props`로 넘기고 넘겨서
           `<List/>` -> `<TodoItem/>` 컴포넌트에 넘긴다.

        2. 해당 `<TodoItem/>`의 삭제 버튼을 클락할 때 `todos` 데이터에서
           해당 `<TodoItem/>`의 id값과 일치하는 요소를 제외한 요소들만 필터링 한 후
           새로운 데이터로 재설정해 화면에 리렌더링 해준다.
      ```

    <br>

- [x] 섹션.10 - useReducer :   
     - 🔗 [section08-useReducer](https://github.com/One-Bite-React-Study/One-Bite-React-Study/blob/hyungjin/section09-useReducer/section08.md)   

<br>

- [ ] 섹션.11 - 최적화

<br>

- [ ] 섹션.12 - Context

<br>

- [ ] 섹션.13 - 프로젝트3. 감정 일기장

<br>

- [ ] 섹션.14 - 마치면서

