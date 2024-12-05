// math module

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// Common Js
// -> Common Js의 모듈 시스템에 의해서 내보내진다.
module.exports = {
  add, 
  sub,
};
