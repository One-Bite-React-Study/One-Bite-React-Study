// * 배열 변형 메서드

// 1. Array.prototype.filter()
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

const arr1 = [
  {name: '김형진', hobby: '배구'},
  {name: '김철수', hobby: '축구'},
  {name: '홍길동', hobby: '독서'},
];


// const soccerPeople = arr1.filter((item)=>{
//   if(item.hobby === '축구') return item;
// });

const soccerPeople = arr1.filter((item)=> item.hobby === '축구');
// console.log(soccerPeople); // [ { name: '김철수', hobby: '축구' } ]


// 2. Array.prototype.map()
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열에 담아 반환
const arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr)=>{
  return item * 2;
});
// console.log(mapResult1); // [ 2, 4, 6 ]

const mapReuslt2 = arr1.map((item, index)=> item.name);
// console.log(mapReuslt2); // [ '김형진', '김철수', '홍길동' ]


// 3. Array.prototype.sort()
// 배열을 사전순으로 정렬하는 메서드
const arr3 = ['b', 'a', 'c'];
arr3.sort();
// console.log(arr3); // [ 'a', 'b', 'c' ]

const numbers = [10, 3, 5];
numbers.sort((a, b)=>{ 
  if(a > b){
    // b가 a 앞에 와라
    return 1;
  }else if( a < b){
    // a가 b 앞에 와라
    return -1;
  }else{
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});
// console.log(numbers); // [ 3, 5, 10 ]


// 4. Array.prototype.toSorted()
// 정렬된 새로운 배열을 반환하는 메서드
const arr5 = ['c', 'a', 'b'];
const sorted = arr5.toSorted();

// console.log(arr5); // [ 'c', 'a', 'b' ], 원본 배열은 변형되지 않음
// console.log(sorted); // [ 'a', 'b', 'c' ], 새로운 변형된 배열이 반환됨


// 5. Array.prototype.join()
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환
const arr6 = ['hi', 'im', 'hyungjin'];
const joined = arr6.join('-'); // 인자로 구분자를 설정
// console.log(joined); // 'hi-im-hyungjin'

