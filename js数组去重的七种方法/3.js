//  排序后去重

/*  思路:试想我们先将要去重的数组使用 sort 方法排序后，相同的值就会被排在一起，
    然后我们就可以只判断当前元素与上一个元素是否相同，相同就说明重复，不相同就添加进 res，
*/

var array = [1, 1, '1'];

function unique(array){
  var res = [];
  var sortedArr = array.concat().sort();  //  拷贝一份新数组并排好序
  var seen;
  for(var i=0,len=sortedArr.length;i<len;i++){
    // 如果是第一个元素或者相邻的元素不相同
    if(!i || seen !==sortedArr[i]){
      res.push(sortedArr[i]);
    }
    seen = sortedArr[i];
  }
  return res;
}

console.log(unique(array))
