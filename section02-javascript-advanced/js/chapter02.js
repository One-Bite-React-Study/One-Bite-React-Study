
const returnFalse = () => {
  console.log('False 함수');
  
  // return false; 
  return ''; // Falsy
};

const returnTrue = () => {
  console.log('True 함수');  
  
  // return true;
  return {}; // Truthy
};


// * 단락 평가

// - AND
// console.log(returnFalse() && returnTrue()); // -> '', 'False 함수'
// console.log(returnTrue() && returnFalse()); // -> 'True 함수' -> '', 'False 함수'


// - OR
// console.log(returnTrue() || returnFalse()); // -> true, 'Ture 함수'


// ------------------------------ //


// * 단락 평가 활용 사례
function printName(person){
  const name = person && person.name;
  console.log( name || 'person의 값이 없음');  
}

printName({
  name: 'Jin',
});