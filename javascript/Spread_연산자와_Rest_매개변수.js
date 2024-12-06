// 배열 스프레드 연산자

let arr1 = [1, 2, 3];

let arr2 = [...arr1, 4, 5, 6];

console.log(arr2);

// 객체 스프레드 연산자
let job = {
  fir: "cooker",
  sec: "talent",
};

let person1 = {
  name: "빽다방",
  age: 58,
};

console.log(person1);

// 인수 스프레드 연산자

const testfunc1 = (one, two, three) => {
  console.log("testfunc : ", one, two, three);
};

testfunc1(...arr1);

const testfunc2 = ({ name, age }) => {
  console.log("testfunc2 : ", name, age);
};

testfunc2(person1);

// rest 연산자
const testPerson = (...rest) => {
  console.log("rest : ", ...rest);
};

testPerson(arr1); // 배열로 전달
testPerson(person1); // 객체 전달
testPerson(...arr1); // 풀어 헤친 값 전달
