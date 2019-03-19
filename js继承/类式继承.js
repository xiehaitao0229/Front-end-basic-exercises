//  类式继承

function Parent(age){
  this.name = ['mike','jack','smith'];
  this.age = age;
}

function Child(age){
  Parent.call(this,age);
}
var test = new Child(21);
console.log(test.age);//21
console.log(test.name);//mike,jack,smith
test.name.push('bill');
console.log(test.name);//mike,jack,smith,bill