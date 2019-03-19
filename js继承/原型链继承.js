//  原型链继承

function Parent(){
  this.name = 'xht';
}

function Child(){
  this.age = 12;
}

Child.prototype = new Parent();

var test = new Child();

console.log(test.name);
console.log(test.age)

function Brother(){
  this.weight = 60;
}

Brother.prototype = new Child();
var brother = new Brother();
console.log(brother.name);
console.log(brother.age);