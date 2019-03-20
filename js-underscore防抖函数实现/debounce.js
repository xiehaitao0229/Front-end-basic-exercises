var count = 1;
var container = document.getElementById('container')
var btn = document.getElementById('btn')

function getUserAction(e) {
  /* console.log(e) */  //  第二版此时是undefined
  container.innerHTML = count++;
  return count;
};

/* container.onmousemove = debounce(getUserAction,1000); */

//  使用取消防抖函数功能
var setAction = debounce(getUserAction,10000,true);
container.onmousemove = setAction;

btn.addEventListener('click',function(){
  setAction.cancel();
})


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
/* function debounce(func,wait){
  var timeout;
  return function(){
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
      console.log(context)
      func.apply(context,arguments);  
    },wait)
  }
} */

//  第四版  我不希望非要等到事件停止触发后才执行，我希望立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行。
/* function debounce(func,wait,immediate){
  var timeout;

  return function(){
    var context = this;
    var args = arguments;
    if(timeout) clearTimeout(timeout);
    if(immediate){
      //  如果已经执行过，不再执行
      var callNow = !timeout;
      timeout = setTimeout(function(){
        timeout = null;
      },wait)
      if(callNow) func.apply(context,args);
    }else{
      timeout = setTimeout(function(){
        func.apply(context,args);
      },wait)
    }
  }
} */

//  第五版  解决 getUserAction函数的返回值问题
/* function debounce(func, wait, immediate) {

  var timeout, result;

  return function () {
      var context = this;
      var args = arguments;

      if (timeout) clearTimeout(timeout);
      if (immediate) {
          // 如果已经执行过，不再执行
          var callNow = !timeout;
          timeout = setTimeout(function(){
              timeout = null;
          }, wait)
          if (callNow) result = func.apply(context, args)
      }
      else {
          timeout = setTimeout(function(){
              func.apply(context, args)
          }, wait);
      }
      return result;
  }
} */

//  最终版  
//  希望能取消 debounce 函数，比如说我 debounce 的时间间隔是 10 秒钟，immediate 为 true，这样的话，
//  我只有等 10 秒后才能重新触发事件，现在我希望有一个按钮，点击后，取消防抖，这样我再去触发，就可以又立刻执行啦
function debounce(func,wait,immediate){
  var timeout,result;

  var debounced = function(){
    var context = this;
    var args = arguments;
    if(timeout) clearTimeout(timeout);
    if(immediate){
      //  如果已经执行过，不再执行
      var callNow = !timeout;
      timeout = setTimeout(function(){
        timeout = null;
      },wait)
      if(callNow) result = func.apply(context,args);
    }else{
      timeout = setTimeout(function(){
        func.apply(context,args);
      },wait)
    }

    return result;
  }

  debounced.cancel = function(){
    clearTimeout(timeout);
    timeout = null;
  }

  return debounced;
}

