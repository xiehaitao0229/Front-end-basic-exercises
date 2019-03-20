/**
 * 1.如果任一参数不能被转换为数值，这就意味着如果参数可以被转换成数字，就是可以进行比较的，比如：
 * Math.max(true, 0) // 1
 *  Math.max(true, '2', null) // 2
 *  Math.max(1, undefined) // NaN
 *  Math.max(1, {}) // NaN
 * 2.2.如果没有参数，则结果为 -Infinity，对应的，Math.min 函数，如果没有参数，则结果为 Infinity，所以：
 * 
 */
var arr = [6, 4, 1, 8, 2, 11, 23];


 // 1.原始遍历方式
/* 

 function max(arr){
  var result = arr[0]
  for(var i=0,len=arr.length;i<len;i++){
    result = Math.max(result,arr[i]);
  }
  return result;
 } */

 //  reduce
 function max(arr){
   if(arr.length==0) return ;
   return arr.reduce((prev,next)=>{
    return Math.max(prev,next)
   })
 }

 //  排序
 /* function max(arr){
   return arr.sort((a,b)=>a-b)[arr.length-1]
 } */

 //  eval方式
/*  function max(arr){
   return eval("Math.max("+arr+")");
 } */

 //  apply方式
/*  function max(arr){
   return Math.max.apply(null,arr);
 } */

 //  ES6方式
/*  function max(arr){
   console.log(...arr)
   return Math.max(...arr)
 } */



 console.log(max(arr))