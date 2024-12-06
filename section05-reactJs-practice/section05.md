## 📚 section05-reactJs-practice

- `eslint.config.js`:
  ```js

  export default [
      ...
      rules: {
        ...
        "no-unused-vars": "off", // 사용하지 않는 변수 에러 출력 off
        "react/prop-types": "off",
      },
    },
  ]
  ```

<br>

- **React 컴포넌트 구조** :

  ```jsx
  // * Root Component
  function App() {

    return (
      <>
      {/* 자식 컴포넌트 */}
        <Header/>
        <Main/>
        <Footer/>
      </>
    )
  ```

<br>

- **jsx**:

  - JavaScipt Extenstions

  - ```
      // * JSX 주의 사항
      // 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
      // 2. 숫자, 문자열, 배열 값만 렌더링 된다.
      // 3. 모든 태그는 닫혀있어야 한다.
    ```

- 조건에 따른 컴포넌트 렌더링 방식 :

  ```js
  const Main = () => {
    const user = {
      name: '김형진',
      isLogin: true,
    };

    if (user.isLogin) {
      return <div>로그아웃</div>;
    } else {
      return <div>로그잇</div>;
    }

    return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
  };
  ```

<br>

- `props`는 부모 컴포넌트에서 자식 컴포넌트로만 전달할 수 있다.

- 컴포넌트의 `state` 값이 바뀌면 해당 컴포넌트가 리렌더링 된다(return을 다시 한다).
- React Component는 일반적인 변수가 아니라 `state` 값이 변화했을 때만 리렌더링이 되므로
  일반 변수의 값을 변경해 적용한다 하더라도 리렌더링이 되지 않아 화면에 반영이 안된다.

  변화하는 가변적인 값을 관리할 때 그런 값을 화면에 렌더링 시켜주고 싶다면
  일반 변수가 아닌 `state`를 사용해서 처리한다.

<br>

### 🔄 리액트 컴포넌트 리렌더링이 발생하는 상황

1. 자신이 관리하는 `state`의 값이 변경될 때
2. 자신이 제공 받는 `props`의 값이 변경될 때
3. 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트도 리렌더링 된다.

부모 컴포넌트에다가 필요 이상의`state`를 몰아두지 말고
해당 `state`가 필요한 각 컴포넌트에다가 설정해주기

<br>

### `state`로 사용자 입력 관리하기

```jsx
// * 비슷한 여러 개의 state가 있을 때 하나의 객체값으로 묶어서 하나의 state로 통합해서 관리해준다.
const [userInfo, setUserInfo] = useState({
  name: '이름',
  birth: '',
  country: '',
  bio: '',
});

// * 비슷한 이벤트 핸들러를 통합 이벤트 핸들러로 묶어준다.
const onChangeUserInfo = ({ target: { value, name } }) =>
  setUserInfo({
    ...userInfo,
    [name]: value,
  });
```
