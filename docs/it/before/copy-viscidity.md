# 在网页中实现截屏粘贴的功能

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
