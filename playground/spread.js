// function add(a, b) {
//   return a+b;
// }
// console.log(add(4,3));
//
// var toAdd = [7, 5];
// console.log(add(...toAdd));

var person = ['venkatesh', 07];
var persontwo = ['nagesh', 12];

function penguin (name, age) {
  console.log('Hi ' +name + ', you are ' +age);
}
penguin(...person);
penguin(...persontwo);

var names = ['venky', 'nagesh'];
var final = ['penguin', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name)
});
