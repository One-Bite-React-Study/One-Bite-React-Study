// * 배열의 요소 순회 및 탐색 메서드

// 1. Array.prototype.forEach()
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
const arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr){
  // console.log({idx, item: item * 2});
});


const dobledArr = [];

arr1.forEach((item)=>{
  dobledArr.push(item * 2);
});

// console.log(dobledArr); // [ 2, 4, 6 ]


// 2. Array.prototype.includes()
// 배열에 특정 요소가 있는지 확인하는 메서드
const arr2 = [2, 2, 2];
// const isInclude1 = arr2.includes(2); // true 
// const isInclude2 = arr2.includes(10); // false


// 3. Array.prototype.indexOf()
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 있을 경우 해당 요소의 인덱스(위치)를 반환
// 없을 경우 -1을 반환
const arr3 = [2, 2, 2];
// const index0 = arr3.indexOf(2); // 0
// const index1 = arr3.indexOf(20); // -1


// 4. Array.prorotype.findIndex()
// 모든 요소를 순회하면서, 콜백함수를 조건을 만족하는 요소의 인덱스(위치)를 반환
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// 조건에 만족하는 요소가 없을 경우 -1를 반환
const arr4 = [1, 2, 3];
const finedIndex1 = arr4.findIndex((item, idx)=>{
  if(item === 2) return true;
});
// console.log(finedIndex); // 1


// const finedIndex2 = arr4.findIndex((item, idx)=>{
//   if(item % 2 !== 0) return true;
// });
const finedIndex2 = arr4.findIndex((item, idx)=> item % 2 !== 0 );
// console.log(finedIndex2); // 0







