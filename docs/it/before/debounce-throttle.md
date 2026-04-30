# 防抖与节流

防抖（Debounce）和节流（Throttle）是两种常用的性能优化技术，用于控制高频触发事件（如 `scroll`、`resize`、`input`）的回调执行频率。

---

## 防抖（Debounce）

**核心思想**：在事件触发后等待一定时间再执行，若在等待期间再次触发则重新计时。常用于搜索框输入、窗口 resize 等场景。

```js
/**
 * 防抖
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延迟时间（毫秒），默认 300ms
 * @param {Boolean} immediate 是否立即执行，默认 false
 */
let timeout;
export default function debounce(func, wait = 300, immediate = false) {
  // 清除上一个定时器
  if (timeout !== null) clearTimeout(timeout);

  if (immediate) {
    // 立即执行模式：第一次触发时立即执行，wait 毫秒内再次触发不执行
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 延迟执行模式：最后一次触发后等待 wait 毫秒再执行
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}
```

---

## 节流（Throttle）

**核心思想**：在一定时间内只允许函数执行一次，无论触发多少次。常用于滚动监听、按钮防重复点击等场景。

```js
/**
 * 节流
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 间隔时间（毫秒），默认 300ms
 * @param {Boolean} immediate 是否在间隔开始时执行（true）还是结束时执行（false），默认 true
 */
let timer, flag;
export default function throttle(func, wait = 300, immediate = true) {
  if (immediate) {
    if (!flag) {
      flag = true;
      // 立即执行模式：在 wait 毫秒间隔的开始处执行
      typeof func === 'function' && func();
      timer = setTimeout(() => {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 延迟执行模式：在 wait 毫秒间隔的结束处执行
      timer = setTimeout(() => {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }
  }
}
```

---

## 对比总结

| 特性 | 防抖（Debounce） | 节流（Throttle） |
|------|-----------------|-----------------|
| 执行时机 | 停止触发后延迟执行 | 固定时间间隔内只执行一次 |
| 适用场景 | 搜索输入、表单验证 | 滚动监听、按钮点击 |
| 效果 | 合并多次触发为一次 | 稀释执行频率 |
