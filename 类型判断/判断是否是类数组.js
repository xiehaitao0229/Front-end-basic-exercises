//  和jquery源码的type函数一样
var class2type = {};

//  生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error Null Undefined".split(" ").map((item)=>{
  class2type["[object " + item + "]"] = item.toLowerCase();
})

/* console.log(class2type) */

function type(obj){
  // 在 IE6 中，null 和 undefined 会被 Object.prototype.toString 识别成 [object Object]！
  // 一箭双雕
  if (obj == null) {
    return obj + "";  //  因为undefined == null 或者 null==null 都是返回true
  }

  return typeof obj==='object' || typeof obj==='function'?
    class2type[Object.prototype.toString.call(obj)] || 'object': typeof obj
}

//  判断是否是window对象
function isWindow(obj){
  return obj!=null&& obj===obj.window;
}

//  判断是否是类数组
function isArrayLike(obj){
  //  obj必须有length属性
  var length = !!obj && "length" in obj && obj.length;
  var typeRes = type(obj)

  if(typeRes==='function' || isWindow(obj)) return false;

  return typeRes==='array' || length===0 || typeof length === "number" && length > 0 && (length - 1) in obj;
}

var arr = [,,3]
var arrLike = {
  2: 3,
  length: 3
}

function test(){
  console.log(arguments)
  console.log(isArrayLike(arr))
}

test()


//  分析 return typeRes==='array' || length===0 || typeof length === "number" && length > 0 && (length - 1) in obj;
/**
 * isArrayLike 返回true 至少要满足三个条件之一
 * 1.是数组
 * 2.长度为 0
 * 3.lengths 属性是大于 0 的数字类型，并且obj[length - 1]必须存在
 * 
 * arguments 是一个类数组对象，如果我们去掉length === 0 这个判断,就会打印 false
 */