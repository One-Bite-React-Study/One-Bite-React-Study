// * async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

(()=>{

  // * async 키워드로 비동기 작업을 하는 Prosmie를 반환하는 함수로 설정
  async function getDate(){
    return {
      name: '김형진',
      id: 'Jin',
    }
  }

  console.log(getDate()); 
  // -> Promise, [[PromiseState]]: 'fulfilled'

})


async function getDate(){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve({
        name: '김형진',
        id: 'Jin',
      })
    }, 2000);
  });
}


// * await
// async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할, then -> await
async function printDate(){
  const data = await getDate(); // * Promise를 반환하는 비동기 작업이 종료될 때 까지 기다린다.

  console.log(data);  

  console.log('aa');  
}

printDate();

const setTimeoutPromise = (timeout = 1000, callback) =>{
  return new Promsie((resolve)=>{
    setTimeout(() => {
      resolve(callback())
    }, timeout);
  });
}