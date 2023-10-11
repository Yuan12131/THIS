// 함수선언방식 : 함수는 일급객체이기 때문에 항상 메모리에 존재함 -> 반응은 빠름
function outerOne(){
  return "hello";
}

// 함수리터럴 : 이름이 없는 함수를 대입해서 이름처럼 쓸 수 있음 -> 엄밀히 말하면 함수 선언이 아니라 함수 대입, 
// 변수는 쓰지않으면 사라짐 -> 최적화에 강점
// 익명함수 = 함수 리터럴
const outerTwo = function(){
  return "bye";
}

// 화살표 함수 : 편한 작성법이나 압축률이 높아 코드 독해하기 어려워짐
const outerThree = () => "wow";
// 매개변수 1개인 화살표 함수
const outerFour = a => a;

console.log(outerOne());
console.log(outerTwo());
console.log(outerThree());
console.log(outerFour("안녕"))