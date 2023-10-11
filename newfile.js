function student(name, number){
  this.name = name;
  // this === student
  this.number = number;
}

let test = new student("공욱재", "0");
console.log(test);
// 객체를 뽑아냄

// let studentList = {
//   name : "hello",
//   number :
// }