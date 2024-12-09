console.log('chapter 04');

// 1. 변수
console.log(a);
var a;

console.log(aa);
let aa;


// 2. 상수 - 초기화 필수!
// const birth; 에러 발생!
const birth = "03.01";


// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용 불가
// 3-2. 숫자로 시작 불가
// 3-3. 예약어 사용 불가
let let;
let if;

// 4. 변수 명명 가이드
// 정보를 알 수 있는 정확한 변수 이름을 짓자!
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;