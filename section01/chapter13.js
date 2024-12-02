// 1. 콜백 함수
function main(value) {
  value();
}

main(() => {
  // console.log("I am sub");
});

// main 함수를 실행 시키고 싶을 때 언제든지 실행 시킬 수 있다.

// 2. 콜백 함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});
