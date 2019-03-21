var arr = [1, [2, [3, 4,function(){}]]];

//  遍历循环
/* function flatten(arr){
  var result = [];
  for(var i=0,len=arr.length;i<len;i++){
    if(Array.isArray(arr[i])){
      result = result.concat(flatten(arr[i]))
    }else{
      result.push(arr[i])
    }
  }
  return result;
} */

//  reduce实现方式
function flatten(arr){
  return  arr.reduce((prev,next)=>{
    return prev.concat(Array.isArray(next)?flatten(next):next)
  },[])
}

console.log(flatten(arr))

