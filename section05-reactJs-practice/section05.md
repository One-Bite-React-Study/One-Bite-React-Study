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
    }

    if(user.isLogin){
      return <div>로그아웃</div>
    }else{    
      return <div>로그잇</div>
    }

    return (
      <>
        {user.isLogin ? (
          <div>로그아웃</div>
        ) : (
          <div>로그인</div>
        )}
      </>
    )
  }  
  ```