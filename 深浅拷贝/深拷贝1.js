var arr = ['old', 1, true, ['old1', 'old2'], {old: 1},function arr(){}]

var new_arr = JSON.parse(JSON.stringify(arr));
new_arr[3][0] = 1

console.log(arr)  //  [ 'old', 1, true, [ 'old1', 'old2' ], { old: 1 }, [Function: arr] ]
console.log(new_arr) //  [ 'old', 1, true, [ 1, 'old2' ], { old: 1 }, null ]

//  JSON.parse(JSON.stringify(arr))这个是一个简单粗暴的方法，但是不能拷贝函数