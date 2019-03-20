var arr = ['old', 1, true, ['old1', 'old2'], {old: 1},function arr(){},null,undefined]

function deepCopy(obj){
  //  只拷贝对象
  if(typeof obj!=='object') return ;
  var newObj = obj instanceof Array ? [] : {};
  // 遍历obj，并且判断是obj的属性才拷贝
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      newObj[key] = typeof obj[key] ==='object' ? deepCopy(obj[key]):obj[key];
    }
  }
  return newObj;
} 

console.log(deepCopy(arr))