# React Router V6 使用方法

本文介绍 **react-router-dom V6** 版本的基本使用方法。V6 版本对 API 进行了大量重构，因此本文内容不适用于 V6 以下版本。

## 安装

```bash
npm i react-router-dom
```

## 路由配置方式

### 方式一：createBrowserRouter（推荐）

使用 `createBrowserRouter` 方法创建路由对象，并用 `RouterProvider` 渲染该路由。

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
    path: '*', // 通配符匹配，用于 404 错误页面
    element: <Error404 />,
  },
]);

export default function IndexRouter() {
  return <RouterProvider router={router} />;
}
```

### 方式二：组件写法（BrowserRouter + Routes）

使用 JSX 组件嵌套的方式声明路由，更接近 V5 风格。

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

## V6 主要变化说明

| 特性 | V5 | V6 |
|------|----|----|
| Switch 组件 | `<Switch>` | 改为 `<Routes>` |
| 路由匹配 | 需要加 `exact` 精确匹配 | 默认精确匹配 |
| 嵌套路由 | 在子组件内定义 | 统一在父路由中用 `<Outlet>` 占位 |
| 编程式导航 | `useHistory` | 改为 `useNavigate` |
| 路由参数 | `useParams` | 保持不变 |
