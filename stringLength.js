function GetBytes(str){
  var len = str.length;
  var bytes = len;
  for(var i=0;i<len;i++){
    if(str.charCodeAt(i)>255) bytes++;
  }

  return bytes;
}

console.log(GetBytes('你好,as'))