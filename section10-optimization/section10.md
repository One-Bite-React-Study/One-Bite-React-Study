## 📚 section10-optimization


### ♻️ React App 내부의 최적화 방법

- 컴포넌트 내부의 불 필요한 연산 방지
- 컴포넌트 내부의 불 필요한 함수 재생성 방지
- 컴포넌트의 불 필요한 리렌더링 방지



### 📝 `useMemo()`

  "메모이제이션" 기법을 기반으로 불 필요한 연산을 최적화 하는 리액트 훅
  ( Memoization: 기억해두기, 메모해두기 )

  `useMemo()`훅을 이용하면 원하는 어떠한 연산을
   특정 조건(**의존성 배열 deps**)이 만족하지 않았을 때는 다시 수행하지 않도록 만들 수 있으며

   그런 연산의 결과값을 반환 받아 사용할 수 있으므로 상당히 유용한 React Hook 이다.

  ```jsx

  //  * 1. ❗️ 컴포넌트가 state 변화로 인해 리렌더링될 때 마다 매번 선언되고 호출되고를 반복하고 있다.
  // const getAnalyzedData = () => {
  //   console.log('getAnalyzedData 호출!');
    
  //   const totalCount = todos.length; // 총 todo 갯수
  //   const douneCount = todos.filter((todo) => !todo.isDone).length; // 체크가 안된 todo 갯수
  //   const notDouneCount = totalCount - douneCount; // 체크가 된 todo 갯수

  //   return {
  //     totalCount,
  //     douneCount,
  //     notDouneCount,
  //   };
  // };

  // const { totalCount, douneCount, notDouneCount } = getAnalyzedData();


  // * 2. ♻️ 컴포넌트가 렌더링될 때 마다 해당 동작이 불필요하게 실행되지 않도록 메모이제이션
  //     2.1 최초 렌더링될 때 인자로 전달한 콜백을 실행해 연산을해 값을 반환
  //     2.2 그 이후에는 의존성 배열에 담긴 값이 변경될 때 만 인자로 전달한 콜백을 실행해서 연산을 해 값을 반환한다.
  const { totalCount, douneCount, notDouneCount } = useMemo(()=>{

    console.log('getAnalyzedData 호출!');
    
    const totalCount = todos.length; // 총 todo 갯수
    const douneCount = todos.filter((todo) => !todo.isDone).length; // 체크가 안된 todo 갯수
    const notDouneCount = totalCount - douneCount; // 체크가 된 todo 갯수

    return {
      totalCount,
      douneCount,
      notDouneCount,
    };
  }, [todos]); // <- 의존성 배열 : deps  

  ```
