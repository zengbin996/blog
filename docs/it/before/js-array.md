# JavaScript 数组

数组用于存储一组有序的数据集合，数组中可以存放任意数据类型的数据。

---

## 创建数组

```js
// 方式一：字面量创建（推荐）
var empty = [];                            // 创建空数组
var arr = [1, 2, 3, 4, 'a', 'b', [1, 2, 5]]; // 创建并初始化（可存放任意类型）

// 方式二：构造函数创建
var arrLen = new Array(5);                 // 只传一个数字时，创建长度为 5 的空数组
var arrItems = new Array(1, 2, 3, 4, 't'); // 传多个参数时，作为数组元素
```

---

## 数组遍历

通过 `arr[下标]` 可以取出数组中的元素（下标从 0 开始）。每个数组都有 `length` 属性，表示数组长度，可用于遍历：

```js
var arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

---

## 增删元素

- **`arr.push(...items)`** — 向数组**末尾**追加一个或多个元素，返回新数组长度
- **`arr.pop()`** — 移除数组**最后一项**，并返回该项的值
- **`arr.unshift(...items)`** — 向数组**开头**插入一个或多个元素，返回新数组长度
- **`arr.shift()`** — 移除数组**第一项**，并返回该项的值
- **`arr.splice(start, deleteCount, ...items)`** — 从 `start` 位置开始，删除 `deleteCount` 个元素，并可选择插入新元素，**原地修改**数组

```js
var arr = [1, 2, 3, 4, 5, 6];
arr.splice(0, 2, 8, 9); // 从索引 0 开始删除 2 个，并插入 8、9
console.log(arr); // [8, 9, 3, 4, 5, 6]
```

---

## 数组排序

**`arr.sort(compareFn)`** — 接收一个比较函数，按指定规则排序（**原地修改**数组）。

```js
var arr = [1, 233, 32, 43, 51, 666];

// 不传参数：按字符串 Unicode 码点排序（结果可能不符合预期）
arr.sort();
console.log(arr); // [1, 233, 32, 43, 51, 666]  ← 按首位字符排序

// 升序排序（数值比较）
arr.sort((a, b) => a - b);
console.log(arr); // [1, 32, 43, 51, 233, 666]

// 按对象属性排序
var people = [
  { age: 18, name: '张三' },
  { age: 20, name: '李四' },
  { age: 15, name: '王五' },
];
people.sort((a, b) => a.age - b.age);
console.log(people);
// [{ age: 15, name: '王五' }, { age: 18, name: '张三' }, { age: 20, name: '李四' }]
```

---

## 常用数组方法

### 遍历类

- **`arr.forEach(callback)`** — 遍历数组，无返回值

```js
var arr = [1, 2, 3, 4, 5, 6];
arr.forEach((value, index, arr) => {
  // value：当前元素，index：当前下标，arr：数组本身
  console.log(value, index);
});
```

- **`arr.every(callback)`** — 判断**所有**元素是否满足条件，全部满足返回 `true`，否则返回 `false`

```js
var arr = [1, 2, 3, 4, 5, 6];
var result = arr.every((value) => !isNaN(value));
console.log(result); // true
```

- **`arr.some(callback)`** — 判断**是否有元素**满足条件，有一个满足即返回 `true`

```js
var arr = [1, 2, 3, 4, 5, 6];
var result = arr.some((value) => value === 1);
console.log(result); // true
```

### 转换类

- **`arr.filter(callback)`** — 返回所有**满足条件**的元素组成的新数组

```js
var arr = [1, 2, 3, 4, 5, 6];
var result = arr.filter((value) => value > 3);
console.log(result); // [4, 5, 6]
```

- **`arr.map(callback)`** — 对每个元素执行回调，返回由回调结果组成的**新数组**

```js
var arr = [1, 2, 3, 4, 5, 6];
var result = arr.map((value) => value > 3);
console.log(result); // [false, false, false, true, true, true]
```

- **`arr.reduce(callback, initialValue)`** — 将数组归并为单一值（常用于求和、统计等）

```js
var arr = [1, 2, 3, 4, 5, 6];
var sum = arr.reduce((acc, value) => acc + value, 0);
console.log(sum); // 21
```

### 其他常用方法

| 方法 | 说明 |
|------|------|
| `arr.join(str)` | 将数组元素拼接为字符串，`str` 为分隔符 |
| `arr.concat(arr2)` | 合并两个或多个数组，返回新数组，不修改原数组 |
| `arr.reverse()` | 原地反转数组并返回 |
| `arr.indexOf(item)` | 查找元素第一次出现的索引，不存在返回 `-1` |
| `arr.includes(item)` | 判断数组是否包含某元素，返回布尔值（ES7） |
| `arr.slice(start, end)` | 截取 `[start, end)` 范围的元素，返回新数组 |
| `Array.isArray(arr)` | 判断 `arr` 是否为数组，返回布尔值 |
| `Array.from(iterable)` | 将类数组或可迭代对象转换为数组（ES6） |
