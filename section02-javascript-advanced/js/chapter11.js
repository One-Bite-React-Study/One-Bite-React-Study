console.log(1);

// 1. 타이머 콜백을 Web APIs에 넘기고 WebAPIs에서 타이머 콜백이 3000ms 만큼 대기하다가 
// 2. 타이머가 끝나고 실행 컨텍스트가 비었을 때 태스크 큐에서 이벤트 루프를 통해 실행 컨텍스트로 이동해 실행된다. 
setTimeout(() => {
  console.log(9999);  
}, 3000);


console.log(3);




