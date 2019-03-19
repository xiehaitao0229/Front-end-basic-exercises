//  双层循环去重
var array = [1,1,'1',1]

function unique(array){
  var result = [];
  for(var i=0,len=array.length;i<len;i++){
    for(var j=0,resLen=array.length;j<resLen;j++){
      if(array[i]===result[j]){
        break
      }
    }
    if(j===resLen){
      result.push(array[i])
    }
  }
  return result
}

console.log(unique(array))