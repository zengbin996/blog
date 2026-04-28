# ES6 新增特性

---

## 块级作用域（let / const）

在 ES6 之前，JavaScript 只有两种作用域：**全局作用域**与**函数作用域**。ES6 新增了**块级作用域**，使用 `let` 和 `const` 关键字声明。

### 特点

1. **不可重复声明**：在同一作用域内，变量不能重复定义。
2. **暂时性死区（TDZ）**：必须先声明，才能使用。

```javascript
let x = 10;
{
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
  let x = 5;
}
```

以上代码会抛出 `ReferenceError`，因为 `console.log(x)` 执行时会先在当前块级作用域中查找 `x`，找到了（块内有 `let x`），但此时 `x` 尚未初始化，处于暂时性死区，因此报错。

3. **不挂载到 `window`**：`let` / `const` 声明的变量不会成为全局对象 `window` 的属性（`var` 声明的会）。
4. **块级作用域生效范围**：在一对花括号 `{}` 内声明的变量，仅在该块内有效。
5. **`const` 声明常量**：`const` 声明后值不可重新赋值，且声明时必须立即赋值。对于对象/数组，`const` 约束的是引用地址，内部属性仍可修改。

### 应用：解决经典闭包问题

```javascript
// 使用 var：输出 10 个 10（因为 var 没有块级作用域，循环结束后 i === 10）
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1);
}

// 使用 let：输出 0~9（每次迭代都有独立的块级作用域）
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1);
}
```

---

## 新增数据类型

ES6 新增了以下 6 种数据类型：

| 类型 | 分类 | 说明 |
|------|------|------|
| `Symbol` | 基本数据类型 | 表示唯一值 |
| `Set` | 引用类型 | 类似数组，元素不重复 |
| `Map` | 引用类型 | 键值对集合，键可为任意类型 |
| `WeakSet` | 引用类型 | 弱引用 Set，成员只能为对象 |
| `WeakMap` | 引用类型 | 弱引用 Map，键只能为对象 |
| `TypedArray` | 引用类型 | 类型化数组，用于操作二进制数据 |

### Symbol

`Symbol()` 表示独一无二的值，常用于定义对象的唯一属性名，避免属性名冲突。`Symbol` 是基本数据类型，不能使用 `new` 调用。可传入字符串作为描述信息，便于调试区分。

```javascript
let sy = Symbol('abc');
console.log(sy);         // Symbol(abc)
console.log(typeof sy);  // "symbol"

// 相同描述的 Symbol() 返回值也不相等
let sy1 = Symbol('abc');
console.log(sy === sy1); // false
```

### Set

`Set` 对象存储任意类型的**唯一值**，类似数组但不允许重复元素。常用于数组去重。

```javascript
let set = new Set([1, 4, 5, 6, 6, 5]);
console.log(set); // Set(4) {1, 4, 5, 6}

// 数组转 Set
let arr = [12, 3, 43, 2, 3];
let set2 = new Set(arr);
console.log(set2); // Set(4) {12, 3, 43, 2}

// Set 转数组（数组去重常用写法）
let unique = [...new Set(arr)]; // [12, 3, 43, 2]

// 使用 for...of 遍历 Set
for (let i of set) {
  console.log(i); // 1  4  5  6
}
```

### Map

`Map` 对象保存键值对，与普通对象不同的是，**键可以是任意类型**（包括对象、函数等），而不仅限于字符串。

```javascript
let map = new Map();
map.set('keystr', 'mymap');
map.set(1, 'number key');

console.log(map);               // Map(2) {"keystr" => "mymap", 1 => "number key"}
console.log(map.get('keystr')); // "mymap"
console.log(map.size);          // 2

// 使用 for...of 遍历 Map
for (let [key, value] of map) {
  console.log(key, value);
}
```
