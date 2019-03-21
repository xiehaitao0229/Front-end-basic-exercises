/**
 * 新需求在一个排好序的数组中找到 value 对应的位置，保证插入数组后，依然保持有序的状态。
 * sortedIndex([10, 20, 30], 25); // 2
 *  */  

 //  使用二分法
 function sortedIndex(array,obj){
  var low = 0,high = array.length;
  while(low<high){
    var mid = Math.floor((low+high)/2);
    if(array[mid]<obj){
      low = mid+1
    }else{
      high = mid
    }
  }
  return high;
}

console.log(sortedIndex([10, 20, 30, 40, 50], 35)) // 3

/**
 * 希望能处理这样的情况：
 * var stooges = [{name: 'stooge1', age: 10}, {name: 'stooge2', age: 30}];
 * var result = sortedIndex(stooges, {name: 'stooge3', age: 20}, function(stooge){
 *       return stooge.age
 *  });
 *  console.log(result) // 1
 */

