# 在网页中实现截图粘贴功能

利用 `clipboardData` API，监听输入框的 `paste` 事件，当用户将截图粘贴到输入框时，自动读取剪贴板中的图片数据，通过 `FileReader` 转为 Base64 格式，并将图片插入到页面中。

**使用方法**：先使用系统截图工具（如 Windows 的 `Win + Shift + S`）截图，然后在输入框内按 `Ctrl + V` 粘贴即可。

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>利用 clipboardData 在网页中实现截屏粘贴的功能</title>
    <style type="text/css">
      #box {
        width: 200px;
        height: 200px;
        border: 1px solid #ddd;
      }
    </style>
  </head>
  <body>
    <h1>利用 clipboardData 在网页中实现截屏粘贴的功能</h1>
    <hr />
    <div>
      <input type="text" id="testInput" placeholder="截屏后粘贴到输入框中" size="30" />
    </div>
    <script type="text/javascript">
      (function () {
        var imgReader = function (item) {
          var blob = item.getAsFile(),
            reader = new FileReader();

          reader.onload = function (e) {
            var img = new Image();

            img.src = e.target.result;
            document.body.appendChild(img);
          };

          reader.readAsDataURL(blob);
        };

        document.getElementById('testInput').addEventListener('paste', function (e) {
          var clipboardData = e.clipboardData,
            i = 0,
            items,
            item,
            types;

          if (clipboardData) {
            items = clipboardData.items;

            console.log([...items]);
            if (!items) {
              return;
            }

            item = items[0];
            types = clipboardData.types || [];

            for (; i < types.length; i++) {
              if (types[i] === 'Files') {
                item = items[i];
                break;
              }
            }

            if (item && item.kind === 'file' && item.type.match(/^image\//i)) {
              imgReader(item);
            }
          }
        });
      })();
    </script>
  </body>
</html>
```
