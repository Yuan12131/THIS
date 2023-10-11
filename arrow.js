// 함수는 일급객체이기 때문에 항상 메모리에 존재함 -> 반응은 빠름
function outer(){
  return "hello";
}

// 이름이 없는 함수를 대입해서 이름처럼 쓸 수 있음 -> 엄밀히 말하면 함수 선언이 아니라 함수 대입, 
// 변수는 쓰지않으면 사라짐 -> 최적화에 강점
// 익명함수 = 함수 리터럴
const outerTwo = function(){
  return "bye";
}

