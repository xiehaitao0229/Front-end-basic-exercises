//  1.对没有定义的变量 typeof b 也是返回 undefined


var a = new Array(3);
var b = [undefined,undefined,undefined];
var c = [];

c.length = 3;

console.log(a)
console.log(b)
console.log(c)

a.slice()
