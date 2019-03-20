/**
 * 节流函数发使用场景
 * 1.DOM 元素的拖拽功能实现（mousemove）
 * 2.射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）
 * 3.计算鼠标移动的距离（mousemove）
 * 4.Canvas 模拟画板功能（mousemove）
 * 5.搜索联想（keyup）
 * 6.监听滚动事件判断是否到页面底部自动加载更多：给 scroll 加了 debounce 后，只有用户停止滚动后，
 * 才会判断是否到了页面底部；如果是 throttle 的话，只要页面滚动就会间隔一段时间判断一次
 */

var count = 1;
var container = document.getElementById('container')

function getUserAction(e) {
  /* console.log(e) */  //  第二版此时是undefined
  container.innerHTML = count++;
  return count;
};

container.onmousemove = throttle(getUserAction,3000)

//  使用时间戳实现
/**
 * 使用时间戳，当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳(最一开始值设为 0 )，
 * 如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。
 * 第一种事件会立刻执行
 * 第一种事件停止触发后没有办法再执行事件
 */

/*  function throttle(func,wait) {
   var context,args;
   var previous = 0;

   return function(){
     var now = +new Date();  //   +new Date()这里的加号可以转化了时间戳
     context = this;
      args = arguments;
     if(now-previous>wait){
       func.apply(context,args);
       previous = now;
     }
   }
 } */

 //  使用定时器实现
 /**
  * 第二种事件会在 n 秒后第一次执行
  * 第二种事件停止触发后依然会再执行一次事件
  */
/*  function throttle(func,wait){
   var timeout,context,args;
   return function(){
     context = this;
     args = arguments;
     if(!timeout){
       timeout = setTimeout(function(){
         timeout = null;
         func.apply(context,args);
       },wait)
     }
   }
 } */

 
 //  完美解决方案
 /**
  * 希望鼠标移入能立刻执行，停止触发的时候还能再执行一次
  */
function throttle(func,wait){
  var timeout,context,args;
  var previous = 0;

  var later = function(){
    previous = +new Date();
    timeout = null;
    func.apply(context,args);
  }

  var throttled = function(){
    var now = +new Date();
    //  下次触发func剩余时间
    var remaining = wait - ( now-previous );
    context = this;
    args = arguments;
    //  如果没有剩余的时间了或者你改了系统时间
    if(remaining<=0|| remaining>wait){
      if(timeout){
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context,args);
    } else if(!timeout){
      timeout = setTimeout(later,remaining);
    }
  };

  throttled.cancel = function(){
    clearTimeout(timeout);
    timeout = null;
    previous = 0;
  }

  return throttled;
}
