var count = 1;
var container = document.getElementById('container')

function getUserAction(e) {
  console.log(e)  //  第二版此时是undefined
  container.innerHTML = count++;
};


container.onmousemove = debounce(getUserAction,1000);

//  第一版  缺点：this执行错误
/* function debounce(func,wait){
  console.log(this)
  var timeout;
  return function(){
    clearTimeout(timeout);
    timeout = setTimeout(func,wait)
  }
} */

//  第二版  event 对象问题
/* function debounce(func,wait){
  var timeout;
  return function(){
    var context = this;
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
      console.log(this)
      func.apply(this);  //  使用箭头函数改变this指向
    },wait)
  }
} */

//  第三版
function debounce(func,wait){
  var timeout;
  return function(){
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
      console.log(this)
      func.apply(this,arguments);  
    },wait)
  }
}