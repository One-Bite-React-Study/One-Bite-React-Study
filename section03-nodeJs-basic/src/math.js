// math module

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}


// - 객체 리터럴에 담지 않고 해당 함수 앞에 export 키워드를 붙여서 내보낼 수 있다.
// export function sub(a, b) {
//   return a - b;
// }

// - export default 키워드로 기본값으로 내보낸다.
export default function multiply(a, b){
  return a * b;
}


// Common Js
// -> Common Js의 모듈 시스템에 의해서 내보내진다.
// module.exports = {
//   add, 
//   sub,
// };


// ES Module
// -> export 키워드 뒤에 객체 리터럴에 값들을 담아 내보낸다.
export { add, sub };
