//  工厂模式

//  没有解决对象识别问题，即不能知道一个对象的类型

function createPerson(name,job){
  var o = new Object();
  o.name = name;
  o.job = job;
  o.sayName = function(){
    console.log(this.name);
  }
  return o;
}

let xiaoming = createPerson('xiaoming','student');
let xiaohong = createPerson('xiaohong','manager')

console.log(xiaoming.sayName())
console.log(xiaohong.sayName())