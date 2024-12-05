(()=>{

  function add(a, b, callback){
    setTimeout(() => { // -> WebAPIs
      const sum = a + b; // 1
      callback(sum); // 2
    }, 3000);
  }
  
  add(1, 2, (result)=>{
    console.log(result); // 3 
  }); 

})


// 음식을 주문하는 상황
function orderFood(callback){
  setTimeout(() => {
      const food = '치킨';
      callback(food);
  }, 3000);
}

function freezeFood(food, callback){
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

function cooldownFood(food, callback){
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}


orderFood((food)=>{
  console.log(food); // 1. 치킨  

  cooldownFood(food, (cooldownedFood)=>{
    console.log(cooldownedFood); // 2. 식은 치킨  

    freezeFood(cooldownedFood, (freezedFood)=>{ 
      console.log(freezedFood); // 3. 냉동된 식은 치킨
    });

  });
  
});