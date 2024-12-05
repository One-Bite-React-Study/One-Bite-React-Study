// * Pomise 객체
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 내장 객체
// setTimeout 함수와 같은 비동기 작업들을 랩핑하는, 즉, 감싸는 객체
// 비동기 작업을 실행시켜 주거나 현재의 상태를 관리하거나 비동기 작업의 결과를 저장해 주거나 
// 여러 개의 작업을 병렬로 동시에 실행시켜 준다거나
// 다시 실행시켜주는 등의 이런 비동기 작업을 처리하는 데 필요하다.


// - 비동기 작업 실행

// - 비동기 작업 상태 관리
//   대기(Pending), 성공(Fulfilled), 실패(Rejected)
//   대기(Pending)에서 성공(Fulfilled)상태로 바뀌는 걸 (resolve)
//   대기(Pending)에서 실패(Rejected)상태로 바뀌는 걸 (rejected)

// - 비동기 작업 결과 저장

(()=>{

  const promise = new Promise((resolve, reject)=>{
    // 비동기 작업 실행하는 함수, executor
    
    setTimeout(() => {
      console.log('안녕');    
  
      // * [[PromiseState]]: 성공(Fulfilled), [[PromiseResult]]: '안녕'
      // resolve('안녕'); // -> resolve()를 호출하게되면 Promise가 성공하게 된다.
  
      // * [[PromiseState]]: 실패(Rejected), [[PromiseResult]]: '왜 실패했는지 이유...'
      // reject('왜 실패했는지 이유...'); // -> reject()를 호출하게되면 Promise가 실패하게 된다.
      
    }, 2000);
  
  });
  
})


(()=>{

  // Prosmise 객체 이용하기
  const promise = new Promise((resolve, reject)=>{
    // 비동기 작업 실행하는 함수, executor

    setTimeout(() => {
      const num = 10;

      if(typeof num === 'number'){
        resolve(num + 10);      
        
      }else{
        reject('num이 숫자가 아닙니다.')  
      }

    }, 2000);
  });

  // then 메서드
  // -> 그 후에
  // -> 호출 뒤 해당 Promise 객체를 다시 반환한다.(Promise Chaining)
  promise.then((value)=>{ // [[PromiseState]]가 성공(Fulfilled)일 때 then() 메서드 호출 
    
    console.log(value); // 20

  }).catch((error)=>{ // [[PromiseState]]가 실패(Rejected)일 때 catch() 메서드 호출 

    console.log(error);  

  });

})


// * Promise 유틸 함수 활용

function add10(num){
  const promise = new Promise((resolve, reject)=>{
    
    setTimeout(() => {
      if(typeof num === 'number'){
        resolve(num + 10);
      }else{
        reject('num이 숫자가 아닙니다.')
      }
    }, 2000);
    
  });

  return promise;
}

add10(0).then(res => {
  console.log(res, 1);
  
  return add10(res); // 다음 then 메서드 콜백의 매개변수로 전달

})
.then(res=> {

  console.log(res, 2);  
  
  return add10(res); // 다음 then 메서드 콜백의 매개변수로 전달

})
.then(res=> {

  console.log(res, 3);  
  
  return add10(res); // 다음 then 메서드 콜백의 매개변수로 전달

}).catch((error)=>{
  
  console.log(error);  
  
});