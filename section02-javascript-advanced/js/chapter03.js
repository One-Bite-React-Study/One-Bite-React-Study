// * 구조 분해 할당

// 1. 배열의 구조 분해 할당
const arr = [1, 2, 3];

const [one, two, three, four = 4] = arr;

// console.log({one, two, three, four}); // -> { one: 1, two: 2, three: 3, four: 4 }


// 2. 객체의 구조 분해 할당
const person = {
  name: '김형진',
  age: 27,
  hobby: '테니스',
  lang: {
    a: 'aa',
    b: 'bb',
    c: 'cc'
  }
};

const {name, hobby, age: myAge, lang: { a, b, c }, location = 'Mokpo'} = person;

// console.log({name, hobby, myAge, a, b, c, location}); 
// -> { name: '김형진', age: 27, hobby: '테니스', location: 'Mokpo' }


// 3. 객체 구조 부내 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name, age, hobby, ...rest}) =>{
  console.log(name, age, hobby, rest);
}
func(person);





