# ReactRouterV6-使用方法

此教程所写的是 react-router-dom V6 版本的使用方法; V6 版本对 API 做了大量的修改, 因此该教程可能不适用于 V6 一下版本

使用方法:

安装

```
npm i react-reouter-dom
```

使用 `createBrowserRouter`方法创建一个路由对象, 并用`RouterProvider`实例该对象

```javascript
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Error404 from './Error404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*', //通配符匹配, 错误页面
    element: <Error404 />,
  },
]);

export default function IndexRouter() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
```

还有一种方法, 组件写法

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Error404 from './Error404';

export default function IndexRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
```
