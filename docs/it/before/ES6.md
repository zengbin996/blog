# ES6 新增

### 新增数据作用域

在 ES6 之前，JavaScript 只有两种作用域：全局变量与函数内的局部变量。ES6 中新增了块级作用域，使用`let`和`const`关键词定义。

#### 特点

1. 在同一作用作用域内，变量不能重复定义
2. 必须先声明，才能使用（暂时性死区），看如下代码

```javascript
let x = 10;
{
  console.log(x);
  let x = 5;
}
```

以上代码会`Uncaught ReferenceError: Cannot access 'x' before initialization`错误，因为`console.log(x)`执行时会先在当前作用域找`x`，如果有`x`，则不会去上级作用域找，但是在`console.log(x)`语句执行时，`x`还没有定义。 3. 声名的变量不绑定到 window 对象上。 4. 在一对大括号中{}，声名变量时，会产生块级作用域，变量仅在此块级作用域中有效。 5. const 定义一个常量，它一旦定义，值就无法改变，所以在定义时必须赋值。

#### 应用

解决闭包问题

```javascript
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1);
}

//以上代码会输出10个10

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1);
}

//输出0-9
```

### 新增数据类型

在 ES6 中新增了一下 6 中数据类型

- Symbol 类型（基本数据类型）
- Set 类型
- Map 类型
- weakSet 类型
- WeakMap 类型
- TypedArray 类型

#### Symbol(）用法

`Symbol()`类型表示独一无二的值，最大的用法是用来定义对象的唯一属性名。Symbol 函数栈不能用 new 命令，因为 Symbol 是原始数据类型，不是对象。可以接受一个字符串作为参数，为新创建的 Symbol 提供描述，用来显示在控制台或者作为字符串的时候使用，便于区分。

```javascript
let sy = Symbol('abc');
console.log(sy); //Symbol(abc)
console.log(typeof sy); //symbol

// 相同参数 Symbol() 返回的值不相等
let sy1 = Symbol('abc');
console.log(sy == sy1); //false
```

#### Set() 用法

`Set`类型对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。它类似于数组，但是他的一大特性就是所有元素都是唯一的，没有重复。可以利用这一点为数组去重

```javascript
let set = new Set([1, 4, 5, 6, 6, 5]);
console.log(set); //Set(4) {1, 4, 5, 6}

//数组转Set
let arr2 = [12, 3, 43, 2, 3];
let set2 = new Set(arr2);
console.log(set2); //Set(4) {12, 3, 43, 2}

//使用for...of可以用拉力遍历Set
for (let i of set) {
  console.log(i);
}
//1 4 5 6
```

#### Map() 用法

`Map`Map 对象保存键值对，任何值(原始值或对象)都可以作为一个键或一个值。Map 是一组键值对，有 key 也有 value。

```javascript
let map = new Map();
map.set('keystr', 'mymap');
console.log(map); //Map(1) {"keystr" => "mymap"}
console.log(map.get('keystr')); //mymap

//for...of也可以遍历Map
```
