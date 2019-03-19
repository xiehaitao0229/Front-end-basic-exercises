//  寄生组合式继承


function Parent(name){
  this.name = name;
  this.colors = ['red','blue','green']
}

Parent.prototype.getName = function(){
  console.log(this.name);
}

function Child(name,job){
  //  继承属性
  Parent.call(this,name);
  this.job = job;
}

//  继承
Child.prototype = Object.create(Parent.prototype);

//  修复constructor
Child.prototype.constructor = Child;
Child.prototype.getJob = function(){
  console.log(this.job);
}

var instance = new Child('xht','student')

console.log(instance.colors);

instance.getName();
instance.getJob()