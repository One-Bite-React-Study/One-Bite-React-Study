// 01. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는것

let num = 10;
let str = "20";
let sum = num + str; //30

// 02. 명시적 형 변환
// -> 개발자가 내장함수 등을 이용해 직접 형 변환을 명시
// => 문자 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);

let str2 = "10개";
let strToNum2 = parseInt(str2); //앞에 숫자일 때만 가능!

// => 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);