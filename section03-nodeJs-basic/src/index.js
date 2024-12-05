// Common Js
// -> 해당 경로에 내보낸 값들이 모듈 객체에 담겨 불러와진다.
// const { add, sub } = require('./math.js'); // 내장 함수

// ES Module
// -> import 뒤에 해당 모듈에서 객체 구조 분해 할당으로 가져올 값들을 뽑아내고 
//    from 키워드로 어떤 모듈로 부터 가져올지 경로를 작성(경로의 확장자 까지 작성해줘야 한다.)
// import { add, sub } from './math.js';
// import mul from './math.js';

// * 동일한 경로로 부터 값을 불러오는 import 문이 여러 개 라면 이런식으로 합치는 것도 가능
import mul, { add, sub } from './math.js';

console.log(add(1,1)); // 2
console.log(sub(10, 2)); // 8 
console.log(mul(3, 2)); // 6