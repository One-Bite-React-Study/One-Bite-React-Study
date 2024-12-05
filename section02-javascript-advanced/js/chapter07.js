// * 6가지의 요소 조작 메서드

// 1. Array.prototype.push()
// -> 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
// -> 변경된 배열의 길이를 반환한다.
const arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

// console.log(arr1); // [1, 2, 3, 4, 5, 6, 7]
// console.log(newLength); // 7


// 2. Array.prototype.pop()
// 배열의 맨 뒤에 있는 요소 제거하고, 반환
const arr2 = [1, 2, 3];
const poppedItem = arr2.pop(); 
// console.log(poppedItem); // 3


// 3. Array.prototype.shift()
// 배열의 맨 앞에 있는 요소를 제거, 반환
const arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
// console.log(shiftedItem, arr3); // 1, [2, 3]


// 4. Array.prototype.unshift()
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
// 변경된 배열의 길이를 반환
const arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
// console.log(newLength2, arr4); // 4, [ 0, 1, 2, 3 ]


// 5. Array.prototype.slice()
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환(복사)
// 두 번째 인자를 생략하면 첫 번째 인자 index 부터 마지막 index요소 까지 잘라낸다.
// 인자에 음수값을 넣어서 뒤에서 부터 잘라낼 수 있다.
const arr5 = [1, 2, 3, 4, 5];
// const sliced = arr5.slice(2, 5) // 2번 index부터 시작해서 5번 index 전에 순서 까지 잘라낸다.
// const sliced2 = arr5.slice(2);
// const sliced3 = arr5.slice(-3);
// console.log(sliced); // [ 3, 4, 5 ]


// 6. Array.prototype.concat()
// 두개의 서로 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
const arr6 = [1, 2];
const arr7 = [3, 4];

const concated = arr6.concat(arr7);

// console.log(concated); // [ 1, 2, 3, 4 ]




