# JavaScript-模块化

## ES6 规范

单个导出

```js
//导出
export let name1 = 'zhangsan';
export let name2 = 'lisi';

//导入
import { name1, name2 } from './test.js';
```

批量导出

```js
//导出
let name1 = 'zhangsan';
let name2 = 'lisi';
let name3 = 'wangwu';
export { name1, name2, name3 };

//导入
import { name1, name2, name3 } from './test.js';
```

取别名

```js
//导出
let name1 = 'zhangsan';
let name2 = 'lisi';
let name3 = 'wangwu';
export { name1 as n1, name2 as n2, name3 as n3 };

//导入
import * as name from './test.js';
```

默认导出，一个模块只能有一个默认导出，对于默认导出，导入的名称可以和导出的名称不一致

```js
//导出
export default function () {
  console.log('默认导出');
}

//导入
import func from './test.mjs';
func();
```

```js
//导出
export default {
  func() {
    console.log('默认导出');
  },
  name: 'zhangsan',
  age: 22,
};

//导入
import obj from './a.mjs';

obj.func();
console.log(obj.name);
console.log(obj.age);
```

## CommonJS 规范

```js
//导出
module.exports.name = 'zhangsan';
module.exports.age = 'zhangsan';
module.exports.func = function () {
  console.log('commonJS规范');
};

//导入
const obj = require('./a');

console.log(obj.name);
console.log(obj.age);
obj.func();

//或者
const { name, age, func } = require('./a');

console.log(name);
console.log(age);
func();
```
