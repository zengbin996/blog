# 利用 a 标签下载文件

## 方法一：直接在 href 中拼接下载参数

在文件地址后拼接 `response-content-type=application/octet-stream` 参数，可强制浏览器触发下载而非预览：

```html
<a href="文件地址?response-content-type=application/octet-stream" download="文件名.扩展名">
  点击下载
</a>
```

> 此方式依赖服务器响应头支持，适用于对象存储（如阿里云 OSS、腾讯云 COS）等场景。

---

## 方法二：JavaScript 动态创建 a 标签

对于需要通过 JS 触发下载的场景（如 Blob 数据、接口返回的二进制流），可以动态创建 `<a>` 标签并模拟点击：

```js
/**
 * 通过 URL 触发文件下载
 * @param {string} url 文件地址
 * @param {string} filename 保存的文件名
 */
function downloadFile(url, filename) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || '';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
```

---

## 方法三：下载接口返回的 Blob 数据

当后端接口直接返回二进制数据（如导出 Excel）时，需要先将响应转为 Blob，再生成临时 URL 触发下载：

```js
/**
 * 下载接口返回的 Blob 文件
 * @param {Blob} blob 接口返回的二进制数据
 * @param {string} filename 保存的文件名
 */
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  // 释放临时 URL，避免内存泄漏
  URL.revokeObjectURL(url);
}

// 使用示例（axios）
axios.get('/api/export', { responseType: 'blob' }).then(res => {
  downloadBlob(res.data, '导出数据.xlsx');
});
```

---

## 注意事项

- `download` 属性仅在**同源**请求下生效；跨域文件需服务器设置 `Content-Disposition: attachment` 响应头才能触发下载。
- 部分浏览器（如 Safari）对 `Blob URL` 的支持存在差异，需做兼容处理。
