//  ES6 set去重

var array = [1, 2, 1, 1, '1'];

function unique(array){
  return [...new Set(array)];
}

console.log(unique(array))
