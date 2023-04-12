# 关于异步编程数据传递问题

在传统的观念里，我们要解决异步编程的数据传递往往是使用回调函数来解决。但是当我们的数据越来越多时，回调函数也会变得越来越多，这样使得代码杂乱无章，不利于我们的阅读和维护。因此在 ES6 中给我们提供了几种不用回调函数也能解决异步编程的数据传递。

### Generator 函数

Generator 函数相当于一个状态机，封装了多个内部状态。执行 Generator 函数会返回一个遍历器对象，可以依次的遍历 Generator 函数内部的每一个状态。

#### 使用方法

```javascript
function* generatorFn() {
  yield 'hello';
  yield 'Generator';
  return 'ending';
}

var gen = generatorFn();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
```

定义时`function`和函数名字中间有一个`*`，`yield`相当于阻断器，每当函数执行到这里时都会阻断去执行`yield`后面的代码，`next()`方法会执行下一步，并且返回`yield`执行的结果

##### next()方法

`next()`方法会执行`generator`的代码，然后，每次遇到`yield x`;就返回一个对象`{value: x, `done`: true/false}`，然后“暂停”。返回的`value`就是`yield`的返回值，`done`表示这个`generator`是否已经执行结束了。如果`done`为`true`，则`value`就是`return`的返回值。当执行到`done`为`true`时，这个`generator`对象就已经全部执行完毕，不要再继续调用`next()`了。

### Promise 对象

Promise 对象代表了未来将要发生的事件，用来传递异步操作的消息。

Promise 对象有两个特点:

1. 对象的状态不受外界影响。Promise 对象代表一个异步操作，有三种状态：

- pending: 初始状态，不是成功或失败状态。
- fulfilled: 意味着操作成功完成。
- rejected: 意味着操作失败。
  <br>
  <br>
  只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是 Promise 这个名字的由来，它的英语意思就是「承诺」，表示其他手段无法改变。

2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise 对象的状态改变，只有两种可能：从 Pending 变为 Resolved 和从 Pending 变为 Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。就算改变已经发生了，你再对 Promise 对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。
3.

#### 使用方法

```javascript
let promis = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (1) {
      resolve('成功');
    } else {
      reject('失败');
    }
  }, 1000);
});

//一下方法可以捕获成功和失败后返回的数据
promis.then(function (onFulfilled, onRejected) {
  console.log(onFulfilled, onRejected);
});

//以上代码也可以这样写
promis
  .then(function (value) {
    console.log(value);
  })
  .catch(function (value) {
    console.log(value);
  });
```

### async 函数

async 是 ES7 才有的与异步操作有关的关键字，和 Promise ， Generator 有很大关联的。他相当于 Generator 的语法糖。

#### 使用方法

```javascript
function fn() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve('成功');
    }, 1000);
  });
}

async function asyncPrint() {
  let first = await fn();
  console.log(first);
}

asyncPrint();
//延迟1秒后输出 成功
```
