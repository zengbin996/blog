# React 组件传参

## 一、属性传参（Props）

**父传子：** 父组件通过属性传递数据，子组件通过函数形参（`props`）接收。

**子传父：** 父组件将回调函数作为属性传给子组件，子组件在适当时机调用该函数，将数据传回父组件。

`Parent.js`

```javascript
import React, { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(99);

  return (
    <div className="text-2xl">
      <div>父组件</div>
      <button onClick={() => setCount(count + 1)}>加一</button>

      <hr />
      <Child count={count} onSubtraction={() => setCount(count - 1)}></Child>
    </div>
  );
}
```

`Child.js`

```javascript
import React from 'react';

export default function Child(props) {
  return (
    <div>
      子组件：
      <div>
        <button onClick={() => props.onSubtraction()}>减一</button>
      </div>
      <div>{props.count}</div>
    </div>
  );
}
```

[在线打开 - CodeSandbox](https://codesandbox.io/s/react-shu-xing-chuan-can-2sut6j?file=/src/Parent.js)

---

## 二、React.createContext 跨层级传参

父子组件和非父子组件都可以使用该方式传参。在父组件中使用 `Provider` 分发数据，在子组件中使用 `useContext` Hook 获取数据。

`Parent.js`

```javascript
import React, { useState } from 'react';
import Child from './Child';

export const Counter = React.createContext();

const Parent = () => {
  const [userInfo, setUserInfo] = useState({
    age: 20,
    sex: 'man',
  });

  return (
    <Counter.Provider value={userInfo}>
      <div style={{ background: 'skyblue' }}>
        <div>父组件</div>
        <button onClick={() => setUserInfo({ ...userInfo, age: userInfo.age + 1 })}>年龄+1</button>
        <button onClick={() => setUserInfo({ ...userInfo, age: userInfo.age - 1 })}>年龄-1</button>
      </div>
      <Child />
    </Counter.Provider>
  );
};

export default Parent;
```

`Child.js`

```javascript
import { useContext } from 'react';
import { Counter } from './Parent';
import Son from './Son';

export default function Child() {
  const counter = useContext(Counter);
  return (
    <div style={{ background: '#2da' }}>
      <div>子组件</div>
      <div>性别：{counter.sex}</div>
      <div>年龄：{counter.age}</div>
      <Son />
    </div>
  );
}
```

`Son.js`

```javascript
import { useContext } from 'react';
import { Counter } from './Parent';

export default function Son() {
  const counter = useContext(Counter);
  return (
    <div style={{ background: '#1ff' }}>
      <div>孙组件</div>
      <div>性别：{counter.sex}</div>
      <div>年龄：{counter.age}</div>
    </div>
  );
}
```

[在线打开 - CodeSandbox](https://codesandbox.io/s/react-contextchuan-can-giu6vj)

---

## 三、使用第三方库传参

以下介绍两种常用的第三方库，**PubSubJS** 和 **Redux**，两者均支持父子组件及非父子组件之间的传参。

### 1. PubSubJS（发布/订阅模式）

PubSubJS 是一个基于主题的发布/订阅库，适合组件间解耦通信。

**安装：**

```bash
npm i pubsub-js
```

**订阅方（接收数据）：**

```javascript
import PubSub from 'pubsub-js';
import { useState } from 'react';

export default function BrotherB() {
  const [value, setValue] = useState();

  // 使用 PubSub.subscribe 订阅事件
  // 第一个参数为事件名称，第二个参数为回调函数（msg 为事件名，data 为数据）
  PubSub.subscribe('input', function (msg, data) {
    setValue(data);
  });

  return <div>B 组件接收数据：{value}</div>;
}
```

**发布方（发送数据）：**

```javascript
import { useRef } from 'react';
import PubSub from 'pubsub-js';

export default function BrotherA() {
  const inputRef = useRef();

  const sendData = () => {
    // 使用 PubSub.publish 发布事件，第二个参数为传递的数据
    PubSub.publish('input', inputRef.current.value);
  };

  return (
    <div style={{ background: '#ca6' }}>
      A 组件发送数据：
      <form
        onSubmit={(e) => {
          e.preventDefault(); // 阻止表单默认提交行为
        }}
      >
        <input ref={inputRef} />
        <button onClick={sendData}>发送</button>
      </form>
    </div>
  );
}
```

[在线打开 - CodeSandbox](https://codesandbox.io/s/react-pubsubjschuan-can-xv4kle)

---

### 2. Redux（全局状态管理）

Redux 是 JavaScript 状态容器，提供可预测化的状态管理，适合大型应用的跨组件数据共享。

**安装：**

```bash
npm i redux
```

`store.js`

```javascript
import { createStore } from 'redux';

const counterReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };

    case 'counter/decremented':
      return { value: state.value - 1 };

    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
```

`App.js`

```javascript
import A from './A';
import B from './B';
import store from './store';

export default function App() {
  return (
    <div className="App">
      <h1>Redux 传参</h1>

      <div style={{ background: 'skyblue' }}>
        <div>
          <button
            onClick={() => {
              store.dispatch({ type: 'counter/incremented' });
            }}
          >
            加一
          </button>
          <button
            onClick={() => {
              store.dispatch({ type: 'counter/decremented' });
            }}
          >
            减一
          </button>
        </div>

        <A />
        <B />
      </div>
    </div>
  );
}
```

`A.js`

```javascript
import { useState, useEffect } from 'react';
import store from './store';

export default function A() {
  const [count, setCount] = useState(store.getState().value);

  useEffect(() => {
    // 组件挂载时订阅，卸载时取消订阅，避免内存泄漏
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().value);
    });
    return unsubscribe;
  }, []);

  return <div>A 组件：{count}</div>;
}
```

`B.js`

```javascript
import { useState, useEffect } from 'react';
import store from './store';

export default function B() {
  const [count, setCount] = useState(store.getState().value);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCount(store.getState().value);
    });
    return unsubscribe;
  }, []);

  return <div>B 组件：{count}</div>;
}
```

> **注意：** `store.subscribe()` 必须在 `useEffect` 中调用，并在清理函数中调用返回的 `unsubscribe`，否则每次组件重新渲染都会注册新的订阅，导致内存泄漏。

[在线打开 - CodeSandbox](https://codesandbox.io/s/react-reduxchuan-can-u8rrhr)

Redux 详细使用方法请参考官方文档：[入门 Redux | Redux 中文官网](https://cn.redux.js.org/introduction/getting-started)

> **提示：** `createStore` 在 Redux 4.x 中已标记为废弃。在实际项目中，推荐使用 **Redux Toolkit**（RTK）代替原生 Redux，它内置了 `configureStore`、`createSlice` 等工具，大幅简化了配置和样板代码。
