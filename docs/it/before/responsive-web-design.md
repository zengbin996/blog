# 响应式布局

**响应式布局**是指用一套代码同时适配多种设备，无需为每个终端单独编写一套代码。页面能够根据用户的屏幕尺寸自动调整布局，从而满足不同设备用户的体验需求。

## 实现手段

### 1. meta 视口标签

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

`content` 参数说明：

| 参数 | 说明 |
|---|---|
| `width=device-width` | 可视区域宽度等于设备宽度 |
| `height` | 可视区域高度，同 width |
| `initial-scale=1.0` | 页面首次显示时的缩放级别，1.0 表示不缩放 |
| `maximum-scale=1.0` | 用户最大放大比例，1.0 禁止放大 |
| `minimum-scale=1.0` | 用户最小缩小比例 |
| `user-scalable=no` | 禁止用户手动缩放页面 |

### 2. 流式布局

- 使用**百分比宽度**代替固定像素宽度，使元素随屏幕宽度自适应缩放。
- `<img>` 标签设置 `max-width: 100%`，防止图片超出容器导致变形。
- 使用 **CSS 媒体查询**（Media Query）针对不同屏幕尺寸应用不同样式：

```css
@media screen and (min-width: 768px) {
  /* 屏幕宽度大于等于 768px 时的样式 */
}
```

### 3. 常用媒体查询断点

```css
/* 大屏桌面：1200px 以上 */
@media screen and (min-width: 1200px) {}

/* 中等屏幕（桌面）：992px ~ 1199px */
@media screen and (min-width: 992px) and (max-width: 1199px) {}

/* 平板电脑：768px ~ 991px */
@media screen and (min-width: 768px) and (max-width: 991px) {}

/* 横屏手机及小屏平板：480px ~ 767px */
@media screen and (min-width: 480px) and (max-width: 767px) {}

/* 竖屏手机：480px 以下 */
@media screen and (max-width: 479px) {}

/* iPad 横屏 */
@media screen and (max-device-width: 1024px) and (orientation: landscape) {}

/* iPad 竖屏 */
@media screen and (max-device-width: 768px) and (orientation: portrait) {}
```

### 4. 弹性布局（Flexbox / Grid）

现代响应式布局通常结合 **Flexbox** 或 **CSS Grid** 使用，配合媒体查询可以更灵活地控制布局结构。

## 优缺点总结

### 优点

1. **一套代码多端适配**：在不同分辨率和设备环境下实现差异化设计，相比维护多个版本的网站，开发和运营成本更低。
2. **兼容性好**：能在桌面、平板、手机等各类设备上正常浏览。
3. **维护方便**：修改样式只需针对一份代码，不会影响其他独立版本。

### 缺点

1. **存在冗余代码**：PC 端加载时，移动端的 CSS 样式也会一并加载，影响加载速度。
2. **图片资源未按设备优化**：图片和视频通常加载同一份资源，低配手机可能加载了超出所需质量的内容，浪费用户流量。
3. **适用场景有限**：不适合内容量大、交互复杂的大型门户网站或电商平台。对于此类场景，建议采用独立的 PC 端与移动端站点，以保证最佳体验。
