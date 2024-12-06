// 배열 구조 분해 할당

let arr = [1, 2, 3, 4];
let [a, b, c] = arr;
console.log(a, b, c);

// 객체 구조 분해 할당
let person = {
  name: "kim",
  age: 19,
};

let { name, age } = person;

console.log(name, age);

const callPerson = ({ name, age }) => {
  console.log(name, age);
};

callPerson(person);
