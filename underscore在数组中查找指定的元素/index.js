//  ES6 对数组新增了 findIndex 方法，它会返回数组中满足提供的函数的第一个元素的索引，否则返回 -1。

function findIndex(array, predicate, context) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (predicate.call(context, array[i], i, array)) return i;
  }
  return -1;
}

console.log(findIndex([1, 2, 3, 4], function (item, index, array) {
  if (item === 3) return true
}))

function findLastIndex(array, predicate, context) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (predicate.call(context, array[i], i, array)) return i;
  }
  return -1;
}

console.log(findLastIndex([1, 2, 3, 4], function (item, index, array) {
  if (item == 1) return true
}))

/**
 * findIndex 和 findLastIndex 其实有很多重复的部分，如何精简冗余的内容呢？
 * 在同一个循环中，实现正序和倒序遍历呢？
 * dir=1 正序  dir=-1倒序
 * */

function createIndexFinder(dir) {
  return function (array, predicate, context) {
    var length = array.length;
    var index = dir > 0 ? 0 : length - 1
    for(;index>=0&&index<length;index+=dir){   // ;index>=0&&index<length;index+=dir  这个判断好巧妙
      if(predicate.call(context,array[index],index,array)) return index;
    }
    return -1;
  }
}

var findIndex2 = createIndexFinder(1)
var findLastIndex2 = createIndexFinder(1)
console.log(findLastIndex2([1, 2, 3, 4], function (item, index, array) {
  if (item == -1) return true
}))






