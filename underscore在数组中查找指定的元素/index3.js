//  indexOf和lastIndexOf方法的实现

//  第一版
function createIndexOfFinder(dir){
  return function(array,item){
    var length = array.length;
    var index = dir>0?0:array.length-1;
    for(;index>=0&&index<length;index+=dir){
      if(array[index]===item) return index;
    }
    return -1;
  }
}


var indexOf = createIndexOfFinder(1);
var lastIndexOf = createIndexOfFinder(-1);

var result = indexOf([1, 2, 3, 4, 5], 2);

console.log(result) // 1

/**
 * 第二版 ，加上fromIndex
 * 设定开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回 -1。
 * 如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即 -1 表示从最后一个元素开始查找，
 * -2 表示从倒数第二个元素开始查找 ，以此类推。 注意：如果参数中提供的索引值是一个负值，仍然从前向后查询数组。
 * 如果抵消后的索引值仍小于 0，则整个数组都将会被查询。其默认值为 0。
 */

// 第二版
function createIndexOfFinder(dir) {

  return function(array, item, idx){
      var length = array.length;
      var i = 0;

      if (typeof idx == "number") {
          if (dir > 0) {
              i = idx >= 0 ? idx : Math.max(length + idx, 0);
          }
          else {
              length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
          }
      }

      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
          if (array[idx] === item) return idx;
      }
      return -1;
  }
}

var indexOf = createIndexOfFinder(1);
var lastIndexOf = createIndexOfFinder(-1);

/*  console.log([1,3,5,8,9].indexOf(8,1))   // 3 */