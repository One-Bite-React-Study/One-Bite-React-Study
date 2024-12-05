// Common Js
// -> 해당 경로에 내보낸 값들이 모듈 객체에 담겨 불러와진다.
const { add, sub } = require('./math.js'); // 내장 함수

console.log(add(1,1)); // 2
console.log(sub(10, 2)); // 8 