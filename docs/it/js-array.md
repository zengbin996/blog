# JavaScript数组
数组可以用来存储一组有序的数据集合，数组里面可以存放任意数据类型的数据。
#### 创建数组
```
//方式一 字面量创建
var arr = [];
var arr = [1, 2, 3, 4, 'a', 'b', [1, 2, 5]];

//方式二 构造函数创建
var arr = new Array(5); //只有一个值代表数组长度
var arr = new Array(1, 2, 3, 4, 't');
```
#### 数组遍历
当我们需要数组中某个元素是，通过``arr[subscript]``就可取出来（这个下标从0开始）。并且每一个数组都已一个``length``属性，代表数组的长度，我们可以用这个属性来遍历数组
```
var arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```


#### 增删元素
- ``arr.push()`` 接收一个或多个参数，把这些值依次追加到指定数组的最后
- ``arr.pop()``移除数组的最后一项，并返回该项的值
- ``arr.unshift()`` 接收一个或多个参数，把这些值依次追加到指定数组的开始
- ``arr.shift()`` 移除数组的第一项，并返回该项的值
- ``arr.splice(开始删除元素的位置, 删除的个数,替换的元素1,替换的元素2,...)``可以同时实现删除，添加或替换
```
var arr = [1, 2, 3, 4, 5, 6];
arr.splice(0, 2, 8, 9);
console.log(arr); //[8, 9, 3, 4, 5, 6]
```
#### 数组排序
``arr.sort(function)``接收一个函数作为参数，在函数里面指定排序方式
```
var arr = [1, 233, 32, 43, 51, 666];
//按照第一位字符的ASCII大小排序
arr.sort()
console.log(arr); // [1, 233, 32, 43, 51, 666]

var arr = [1, 233, 32, 43, 51, 666];
//按照大小排序
arr.sort((a, b) => a - b);
console.log(arr); // [1, 32, 43, 51, 233, 666]

var arr = [{
        age: 18,
        name: "张三"
    },
    {
        age: 20,
        name: "李四"
    },
    {
        age: 15,
        name: "王五"
    },

]
//按照对象属性排序
arr.sort((a, b) => a.age - b.age);
console.log(arr);
// (3) [{…}, {…}, {…}]
// 0: {age: 15, name: "王五"}
// 1: {age: 18, name: "张三"}
// 2: {age: 20, name: "李四"}
```
#### 数组其他方法
- ``arr.forEach(function)`` 循环遍历数组
```
var arr = [1, 2, 3, 4, 5, 6];
arr.forEach((value, index, arr) => {
    //第一个参数为数组的项，第二个参数为数组的下标，第三个参数为数组本身
    console.log(value,index + "，");// 1 0，  2 1，  3 2，  4 3，  5 4，  6 5 
}) 
```
<hr>
- ``arr.every(function)`` 针对数组的元素做些判断，如果结果都为true，则返回的结果为true
```
var arr = [1, 2, 3, 4, 5, 6];
var result = arr.every((value, index) => {
   return !isNaN(value);
}) 

console.log(result); //true
```
<hr>
- ``arr.some(function)`` 针对数组的元素做些判断，如果有一个为true，则返回的结果为true
```
var arr = [1, 2, 3, 4, 5, 6];
var result = arr.some((value, index) => {
   return value == 1;
}) 

console.log(result); //true
```
<hr>
- ``arr.filter(function)`` 针对数组的元素做些判断，满足的元素会以一个数组返回
```
var arr = [1, 2, 3, 4, 5, 6];
var result = arr.filter((value, index) => {
    return value > 3;
})

console.log(result); //[4, 5, 6]
```
<hr>

- ``arr.map(function)`` 返回一个新数组
```
var arr = [1, 2, 3, 4, 5, 6];
var result = arr.map((value, index) => {
    return value > 3;
})

console.log(result); // [false, false, false, true, true, true]
```
- ``arr.join(str)`` 将数组拼接成字符串
- ``arr.concat(arr1)``数组拼接
- ``arr.reverse()``倒序并返回
- ``arr.indexOf(查找项)`` 查找数组中是否有指定字符
- ``arr.slice(开始位置,结束位置)`` 结束指定内容并返回
- ``Array.isArray(arr)`` 判断arr是不是数组
