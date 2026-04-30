# JavaScript 异步编程

在传统写法中，解决异步编程的数据传递往往依赖**回调函数**。但当异步操作层层嵌套时，回调函数也随之层层嵌套，形成"回调地狱"，代码难以阅读和维护。ES6 起提供了多种更优雅的异步解决方案。

---

## Generator 函数

**Generator 函数**相当于一个状态机，封装了多个内部状态。调用 Generator 函数不会立即执行，而是返回一个**遍历器对象**（Iterator），通过调用 `next()` 方法可以依次执行函数内部的每个状态。

### 基本语法

```javascript
function* generatorFn() {
  yield 'hello';
  yield 'Generator';
  return 'ending';
}

var gen = generatorFn();
console.log(gen.next()); // {value: "hello",     done: false}
console.log(gen.next()); // {value: "Generator", done: false}
console.log(gen.next()); // {value: "ending",    done: true}
```

- 定义时在 `function` 关键字后加 `*`。
- `yield` 是"暂停点"，函数执行到 `yield` 时暂停，并将 `yield` 后的表达式值作为返回值。
- 调用 `next()` 方法恢复执行，直到下一个 `yield` 或 `return`。

### next() 方法返回值

每次调用 `next()` 返回一个对象 `{ value, done }`：

- `value`：当前 `yield` 表达式的值；若已执行完毕则为 `return` 的值。
- `done`：`false` 表示 Generator 未执行完，`true` 表示已执行结束。

当 `done` 为 `true` 后，不应再调用 `next()`。

---

## Promise 对象

**Promise** 代表一个异步操作最终完成或失败的结果，用于解决回调地狱问题。

### 两个核心特点

1. **状态不受外界影响**：Promise 有三种状态，只有异步操作的结果才能决定当前状态：
   - `pending`：初始状态，等待中
   - `fulfilled`：操作成功完成
   - `rejected`：操作失败

2. **状态一旦改变，不可逆转**：只存在两种变化路径：`pending → fulfilled` 或 `pending → rejected`。状态凝固后，再添加回调也能立即得到结果（与事件监听不同，错过了事件就拿不到结果）。

### 基本用法

```javascript
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (true) {
      resolve('成功'); // 将 Promise 状态改为 fulfilled
    } else {
      reject('失败');  // 将 Promise 状态改为 rejected
    }
  }, 1000);
});

// 写法一：then 接收两个回调（第一个处理成功，第二个处理失败）
promise.then(function (value) {
  console.log('成功：', value);
}, function (reason) {
  console.log('失败：', reason);
});

// 写法二：then + catch（推荐，链式调用更清晰）
promise
  .then(function (value) {
    console.log('成功：', value);
  })
  .catch(function (reason) {
    console.log('失败：', reason);
  });
```

> **注意**：原文中 `then(function(onFulfilled, onRejected))` 的写法有误——`then` 接收的是两个**独立的回调函数**作为参数，而非将两个回调合并为一个函数的参数。

---

## async / await

**async/await** 是 ES2017（ES8）引入的异步语法糖，基于 Promise 实现，让异步代码写起来像同步代码，大幅提升可读性。

- `async` 声明的函数总是返回一个 Promise。
- `await` 只能在 `async` 函数内部使用，用于等待一个 Promise 完成，并取出其 resolved 值。

### 基本用法

```javascript
function fn() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve('成功');
    }, 1000);
  });
}

async function asyncPrint() {
  let result = await fn(); // 等待 fn() 的 Promise 完成
  console.log(result);     // 1 秒后输出：成功
}

asyncPrint();
```

### 错误处理

使用 `try...catch` 捕获 `await` 中可能抛出的错误：

```javascript
async function fetchData() {
  try {
    let result = await fn();
    console.log(result);
  } catch (err) {
    console.error('请求失败：', err);
  }
}
```

---

## 四种方案对比

| 方案 | 引入版本 | 特点 |
|------|----------|------|
| 回调函数 | ES5 及之前 | 简单，但嵌套多时产生"回调地狱" |
| Generator | ES6 | 可暂停函数，需配合执行器（如 `co`）使用 |
| Promise | ES6 | 链式调用，解决回调地狱，但链较长时仍繁琐 |
| async/await | ES8 | 最简洁直观，基于 Promise，推荐使用 |
