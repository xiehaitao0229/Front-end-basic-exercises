特殊类型比较:
  去重的方法就到此结束了，然而要去重的元素类型可能是多种多样，除了例子中简单的 1 和 '1' 之外，
  其实还有 null、undefined、NaN、对象等，那么对于这些元素，之前的这些方法的去重结果又是怎样呢？

先看几个例子:
    var str1 = '1';
    var str2 = new String('1');

    console.log(str1 == str2); // true
    console.log(str1 === str2); // false

    console.log(null == null); // true
    console.log(null === null); // true

    console.log(undefined == undefined); // true
    console.log(undefined === undefined); // true

    console.log(NaN == NaN); // false
    console.log(NaN === NaN); // false

    console.log(/a/ == /a/); // false
    console.log(/a/ === /a/); // false

    console.log({} == {}); // false
    console.log({} === {}); // false

那么，对于这样一个数组
    var array = [1, 1, '1', '1', null, null, undefined, undefined, new String('1'), new String('1'), /a/, /a/, NaN, NaN];


    整理了一个列表
    
    方法	                      结果	                                                              说明
    for循环	    [1, "1", null, undefined, String, String, /a/, /a/, NaN, NaN]	              对象和 NaN 不去重
    indexOf    [1, "1", null, undefined, String, String, /a/, /a/, NaN, NaN]	              对象和 NaN 不去重
    sort	     [/a/, /a/, "1", 1, String, 1, String, NaN, NaN, null, undefined]	            对象和 NaN 不去重 数字 1 也不去重
    filter + indexOf	[1, "1", null, undefined, String, String, /a/, /a/]	              对象不去重 NaN 会被忽略掉
    filter + sort	    [/a/, /a/, "1", 1, String, 1, String, NaN, NaN, null, undefined]    	对象和 NaN 不去重 数字 1 不去重
    优化后的键值对方法	[1, "1", null, undefined, String, /a/, NaN]	全部去重
    Set	        [1, "1", null, undefined, String, String, /a/, /a/, NaN]