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

console.log(type(new Date(1)))
