// 01. 대입 연산자 (=)
let var1 = 1;

// 02. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2; //1, 2보다 우선순위 높음
let num4 = 3 / 2; //1, 2보다 우선순위 높음
let num5 = 3 % 2; //모듈러 연산자 //1, 2보다 우선순위 높음

let num6 = 1 + 2 * 10; //21

// 03. 복합 대입 연산자
let num7 = 10;
num7 += 20; //30
num7 -= 20; //10
num7 *= 20;
num7 /= 20;
num7 %= 20;

// 04. 증감 연산자
let num8 = 10;
num8++; //11
console.log(num8++);//10 => 후위 연산: 해당 라인이 끝나고 난 뒤 값이 더해지기 때문!
console.log(++num8);//11 => 전위 연산: 해당 라인에서 즉시 연산이 이루어짐!

// 05. 논리 연산자
let or = true || false; //true
let and = true && false; //false
let not = !true; //false

// 06. 비교 연산자
let comp1 = 1 === 2; //false
let comp2 = 1 !== 2; //true
// == : 자료형까지는 비교해주지 않는다.

