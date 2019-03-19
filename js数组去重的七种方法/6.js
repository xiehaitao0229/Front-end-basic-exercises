//  Object 键值对方式

var array = [1, 2, 1, 1, '1'];
var array = [{value: 1}, {value: 1}, {value: 2}];

function unique(array) {
  var obj = {};
  return array.filter(function(item, index, array){
      console.log(typeof item + JSON.stringify(item))
      return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
  })
}

console.log(unique(array))