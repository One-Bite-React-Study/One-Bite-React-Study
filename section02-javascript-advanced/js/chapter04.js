// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 iterable한 값을 흩뿌려주는 역할

const arr1 = [1, 2, 3];
const arr2 = [4, ...arr1, 5, 6]; // -> [ 4, 1, 2, 3, 5, 6 ]


const obj1 ={
  a: 1,
  b: 2,
};

const obj2 = {
  c: 3,
  ...obj1,
  d: 4,
}; 
// -> { c: 3, a: 1, b: 2, d: 4 }


function funcA(p1, p2, p3){
  console.log(p1, p2, p3);  
}

// funcA(...arr1); // -> 1, 2, 3


// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
// -> Rest 매개변수 다음 순서에는 추가적인 매개변수가 올 수 없다.
function funcB(one, two, ...rest){
  console.log(rest); // -> [3]
}
funcB(...arr1);



