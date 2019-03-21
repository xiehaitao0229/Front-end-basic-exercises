//  和jquery源码的type函数一样
var class2type = {};

//  生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error Null Undefined".split(" ").map((item) => {
  class2type["[object " + item + "]"] = item.toLowerCase();
})

/* console.log(class2type) */

function type(obj) {
  // 在 IE6 中，null 和 undefined 会被 Object.prototype.toString 识别成 [object Object]！
  // 一箭双雕
  if (obj == null) {
    return obj + "";  //  因为undefined == null 或者 null==null 都是返回true
  }

  return typeof obj === 'object' || typeof obj === 'function' ?
    class2type[Object.prototype.toString.call(obj)] || 'object' : typeof obj
}

//  判断是否是window对象
function isWindow(obj) {
  return obj != null && obj === obj.window;
}

//  判断是否是类数组
function isArrayLike(obj) {
  //  obj必须有length属性
  var length = !!obj && "length" in obj && obj.length;
  var typeRes = type(obj)

  if (typeRes === 'function' || isWindow(obj)) return false;

  return typeRes === 'array' || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
}


/**
 * jQuery 的 each 方法，作为一个通用遍历方法，可用于遍历对象和数组。
 * jQuery.each(object, [callback])
 * 对于 jQuery 的 each 函数，如果需要退出 each 循环可使回调函数返回 false，其它返回值将被忽略。
 */

//  第一版
function each(obj, callback) {
  var length, i = 0;
  if (isArrayLike(obj)) {
    length = obj.length;
    for (; i < length; i++) {
      callback(i, obj[i]);
    }
  } else {
    for (i in obj) {
      callback(i, obj[i])
    }
  }
}

//  第二版，中止循环
function each(obj, callback) {
  var length, i = 0;
  if (isArrayLike(obj)) {
    length = obj.length;
    for (; i < length; i++) {
      if (callback(i, obj[i]) === false) {
        break
      }
    }
  } else {
    for (i in obj) {
      if (callback(i, obj[i]) === false) {
        break
      }
    }
  }
}

//  解决在callback函数的this指向
function each(obj, callback) {
  var length, i = 0;
  if (isArrayLike(obj)) {
    length = obj.length;
    for (; i < length; i++) {
      if (callback.call(obj[i], i, obj[i]) === false) {
        break
      }
    }
  } else {
    for (i in obj) {
      if (callback.call(obj[i], i, obj[i]) === false) {
        break
      }
    }
  }
}