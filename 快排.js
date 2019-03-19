var arr = [1,6,4,5,8,9,2,7,3,10];

function quickSelect(arr){
  if(arr.length<=1){
    return arr;
  }

  var num  = Math.floor(arr.length/2);

  var numValue = arr.splice(num,1);
  var left = [],right = [];
  for(var i=0;i<arr.length;i++){
    if(arr[i]<numValue){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return quickSelect(left).concat(numValue,quickSelect(right));
}

console.log(quickSelect(arr))