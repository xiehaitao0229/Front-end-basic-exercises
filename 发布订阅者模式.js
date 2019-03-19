//  发布订阅者模式

var PubSub = (function(){
  var queue = {};

  //  订阅
  var subscribe = function(event,fn){
    if(!queue[event]){
      queue[event] = [];
    }
    queue[event].push(fn);
  }

  //  发布
  var publish = function(event){
    var eventQueue = queue[event];

    if(eventQueue){
      eventQueue.forEach(function(item,index){
        item();
      })
    }
  }

  //  取消订阅
  var unSubscribe = function(event,fn){
    var eventQueue = queue[event];
    if(eventQueue){
      queue[event] = eventQueue.filter(function(item){
        return item !==fn;
      })
    }
  }

  return {
    subscribe,
    publish,
    unSubscribe,
  }
})()


//  实例

function first(){
  console.log('发布订阅者模式1')
}

PubSub.subscribe('xht',first);

PubSub.subscribe('xht',function(){
  console.log('发布订阅者模式2')
})

PubSub.subscribe('xht2',function(){
  console.log('发布订阅者模式3')
})

PubSub.publish('xht')

PubSub.unSubscribe('xht',first)
console.log('---------------------')

PubSub.publish('xht')

