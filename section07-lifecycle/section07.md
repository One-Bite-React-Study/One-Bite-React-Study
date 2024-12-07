## 📚 section07-lifecycle

### 🔄 리액트 컴포넌트의 라이프 사이클

- 🐣 **Mount** :   
  - 컴포넌트가 탄생하는 순간   
  - 화면에 처음 렌더링 되는 순간   
  ex) "A 컴포넌트가 Mount 되었다!" -> A 컴포넌트가 화면에 처음으로 렌더링 되었다.

<br>

- 🐓 **Update** :
  - Mount 이후에 컴포넌트가 다시 렌더링 되는 순간   
  - 리렌더링 될 때를 의미   
  ex) "A 컴포넌트가 Update 되었다!" -> A 컴포넌트가 리렌더링 되었다.

<br>

- 🍗 **UnMount** :
  - 컴포넌트가 화면에서 사라지는 순간   
  - 렌더링에서 제외 되는 순간을 의미     
  ex) "A 컴포넌트가 UnMount 되었다!" -> A 컴포넌트가 화면에서 사라졌다.

<br>

### 🎉 `useEffect()`, Side Effect

리액트 *컴포넌트의 사이드 이펙트*를 제어하는 React Hook

- **컴포넌트의 사이드 이펙트** : "리액트의 부수적인 효과", "파생되는 효과"   
  ex) "과식을 하면 살이 찐다"에서 "살이 찐다"라는 말은 과식을 했기 때문에 발생하는 파생적인 효과 즉, Side Effect이다.   
  결국 어떠한 동작에 따라 파생되는 이러한 효과들을 **Side Effec**t 라고 부른다.

  -> 리액트의 Side Effect란 컴포넌트가 어떤 동작을 했을 때 발생하게 되는 파생적인 효과들을 말한다.

  예를 들어서 컴퍼넌트의 어떤 값이 변경되었을 때 콘솔에 현재 어떠한 값이 어떻게 바뀌었는지 출력해 준다던가   
  또는 컴포넌트가 Mount 되었을 때는 콘솔에 "Mount"를 출력하고   
  Update 되었을 때는 콘솔에 "Update"를 출력하고   
  마지막으로 UnMount 되었을 때는 콘솔에 "UnMount"라고 출력하는 이러한 LifeCycle을 제어하는 것도 모두 결국엔   
  컴포넌트의 **Side Effect** 라고 볼 수 있다.   

  그리고 `useEffect()`를 이용하면 이러한 **side Effect** 를 새롭게 만들거나 또는 제어할 수 있다.
  
  ```jsx
  // 1. 해당 컴포넌트가 렌더링될 때 최초로 한 번 실행
  // 2. 의존성 배열에 있는 값이 Update될 때 마다 실행
  // 3. 해당 컴포넌트가 UnMount가 될 때 실행
  useEffect(()=>{

    console.log(count);    

  }, [count]); // <- 의존성 배열(dependency array, deps)

  ```

<br>

### 💡 `useState`의 `setState함수(상태 변경 함수)`는 비동기로 동작한다.
  **즉, React의 state는 비동기로 업데이트 된다.**   
  그러므로 변경된 `state`의 값을 바로 사용해서 무언가 *Side Effect*에 해당하는 부가적인 작업을 진행하려면 안되고   
  `useEffec()`를 이용해야 한다.

<br>


  ```jsx
    import React, { useState, useEffect, useRef } from 'react'
    
    const isMount = useRef(false);

    // * 1. Mount : 탄생
    // -> Mount될 때 한번 실행
      useEffect(()=>{
        console.log('mount');      
      }, [])
      
    // * 2. Update : 변화, 리렌더링
    // -> Mount될 때 한번 실행 된 다음에 해당 컴포넌트가 리렌더링 될 때(Update) 마다 계속 실행
      useEffect(()=>{

        // * 최초 Mount될 때를 제외한 이후 업데이트되는 순간에 만 콜백을 실행하도록
        if(!useRef.current){
          isMount.current = true; 
          return;
        }

        console.log('update');      
      })

    // * 3. UnMount: 죽음
    useEffect(()=>{

      // * Clearn Up 함수
      return () =>{
        console.log('UnMount!');      
      }
    },[])


  ```