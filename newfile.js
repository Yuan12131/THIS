function student(name, number){
  this.name = name;
  // this === student
  this.number = number;
}

let test = new student("공욱재", "0");
console.log(test);
// 객체를 뽑아냄

let list = ["이유안", "방승희"];
let studentArr = [];
for(let i = 0; i < list.length; i++){
  studentArr[i] = new student(list[i], i+1)
}
console.log(studentArr);

// let studentList = {
//   name : "hello",
//   number :
// }