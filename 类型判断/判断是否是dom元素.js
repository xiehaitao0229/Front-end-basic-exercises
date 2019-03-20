//  isElement 判断是不是 DOM 元素

function isElement(obj){
  return !!(obj&& obj.nodeType===1)
}
