//  原型链+借用构造函数=组合继承

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

//  继承方法
Child.prototype = new Parent();
Child.prototype.constructor = Parent;
Child.prototype.getJob = function(){
  console.log(this.job);
}

var instance = new Child('xht','student');
instance.colors.push('black');

console.log(instance.colors);
instance.getName();
instance.getJob();

var instance2 = new Child('xht','student');

console.log(instance2.colors);
instance2.getName();
instance2.getJob();