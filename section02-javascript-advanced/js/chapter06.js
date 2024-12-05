// 1. 배열 순회 
const arr = [1, 2, 3];

// 1.1 배열 인덱스
for(let i=0; i<arr.length; i++){
  // console.log(arr[i]); // 1 -> 2 -> 3   
}


let arr2 = [4, 5, 6, 7, 8];

for(let i=0; i<arr2.length; i++){
  // console.log(arr2[i]); // 4 -> 5 -> 6 -> 7 -> 8
}


// 1.2 for of 반복문
// -> 배열을 순회하며 배열을 순회할 때 사용
for(const item of arr){
  // console.log(item); // 1 -> 2 -> 3     
}


// 2. 객체 순회
const person = {
  name: '김형진',
  age: 27,
  hobby: '테니스',
};

// 2.1 Object.keys() 메서드 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
const keys = Object.keys(person);
// console.log(keys); // -> [ 'name', 'age', 'hobby' ]

for(const key of keys){
  const value = person[key]; 
  // console.log(key,value); // 'name' '김형진' -> 'age' 27 -> 'hobby' '테니스'
}


// 2.2 Object.values()
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
const values = Object.values(person);
// console.log(values); // -> [ '김형진', 27, '테니스' ]

for(const value of values){
  // console.log(value); // '김형진' -> 27 -> '테니스'
}

// 2.3 for in
// -> 객체를 순회하며 객체를 순회할 때 사용
for(const key in person){
  const value = person[key];
  // console.log(key, value); // 'name' '김형진' -> 'age' 27 -> 'hobby' '테니스'
}

