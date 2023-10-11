function outerOne(a){

  // 아래 작성한 것과 똑같은 결과가 나오는 화살표 함수
  const innerOne = b => console.log(b)
  innerOne(a);

  // function innerOne(b){
  //   console.log(b);
  // }
  // innerOne(a);

}
console.log(outerOne("hello"))

  fs.readFile("./html", data, (error) => {
    
  })