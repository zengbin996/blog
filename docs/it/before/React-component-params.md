# React 组件传参

### 属性传参

父传子: 父组件使用属性传递, 子组件使用形参接收

子传父: 父组件传给子组件一个方法, 子组件去触发这个方法

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
      子组件:
      <div>
        <button onClick={() => props.onSubtraction()}>减一</button>
      </div>
      <div>{props.count}</div>
    </div>
  );
}
```

[在线打开-CodeSandbox](https://codesandbox.io/s/react-shu-xing-chuan-can-2sut6j?file=/src/Parent.js)

### React.createContext 方法传参

父子组件和非父子组件都可以使用该方法进行传; 在父组件中使用`Provider`分发数据, 在子组件中使用`useContent`方法获取数据

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

export default function () {
  const counter = useContext(Counter);
  return (
    <div style={{ background: '#2da' }}>
      <div>子组件</div>
      <div>性别: {counter.sex}</div>
      <div>年龄: {counter.age}</div>

      <Son />
    </div>
  );
}
```

`Son.js`

```javascript
import { useContext } from 'react';
import { Counter } from './Parent';

export default function () {
  const counter = useContext(Counter);
  return (
    <div style={{ background: '#1ff' }}>
      <div>孙组件</div>
      <div>性别: {counter.sex}</div>
      <div>年龄: {counter.age}</div>
    </div>
  );
}
```

[在线打开 - CodeSandbox](https://codesandbox.io/s/react-contextchuan-can-giu6vj)

### 使用第三方插件

本文使用两种插件, `pubsub-js` 和 `redux`, 这两种方法传参父子组件和非父子组件都可以使用

1. PubSubJS 是一个用 JavaScript 编写的基于主题的 发布/订阅库,

首先安装插件

```
npm i pubsub-js
```

具体使用方法如下:

订阅方

```javascript
import PubSub from 'pubsub-js';
import { useState } from 'react';

export default function BordertherB() {
  const [value, setValue] = useState();

  //使用PubSub.subscribe订阅一个事件, 第一个参数为订阅事件名称, 第二个参数订阅内容
  PubSub.subscribe('input', function (mag, value) {
    setValue(value);
  });
  return <div>B组件接收数据:{value}</div>;
}
```

发布方

```javascript
import { useRef } from 'react';
import PubSub from 'pubsub-js';

export default function BordertherA() {
  const inputRef = useRef();
  const sendData = () => {
    //使用PubSub.publish发布一个事件, 第一个参数是事件名称, 第二个参数是额外参数
    PubSub.publish('input', inputRef.current.value);
  };

  return (
    <div style={{ background: '#ca6' }}>
      A组件发生数据:
      <form
        onSubmit={(e) => {
          e.preventDefault(); //阻止表单默认提交事件
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

2. Redux 是 JavaScript 状态容器，提供可预测化的状态管理。

**使用方法**:

首先安装插件

```
npm i redux
```

具体使用方法如下

`App.js`

```javascript
import A from './A';
import B from './B';
import store from './sotre';

export default function App() {
  return (
    <div className="App">
      <h1>Redux 传参</h1>

      <div style={{ backgruond: 'skyblue' }}>
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

`sotre.js`

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

`A.js`

```javascript
import { useState } from 'react';
import store from './sotre';

export default function A() {
  const [count, setCount] = useState();

  store.subscribe((a) => {
    const { value } = store.getState();
    setCount(value);
  });
  return <div>A组件: {count}</div>;
}
```

`B.js`

```javascript
import { useState } from 'react';
import store from './sotre';

export default function B() {
  const [count, setCount] = useState();

  store.subscribe((a) => {
    const { value } = store.getState();
    setCount(value);
  });
  return <div>B组件: {count}</div>;
}
```

[在线打开 - CodeSandbox](https://codesandbox.io/s/react-reduxchuan-can-u8rrhr)

Redux 详情使用方法请参考官方文档 [入门 Redux | Redux 中文官网](https://cn.redux.js.org/introduction/getting-started)
