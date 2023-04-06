# 关于 margin 塌陷和 margin 合并问题解决

## margin 塌陷

_当给一个块级元素的第一个子元素设置 margin-top 时会带动父级盒子一起下移_

#### 解决方法：

1. 给父级盒子设置`border:1px solid transparent;box-sizing: border-box;`
2. 在第一个子元素前面加一个`<table></table>`
3. 给父级盒子设置 padding 属性来代替 margin

_（以上三种方法，不推荐使用）_

4. 触发 BFC（块级格式上下文），改变父级渲染规则。一下四种方法都可以实现，但是各自都有各自的缺点，可根据实际情况选择合适的方法。

```
position:absolute/fixed;

display:inline-block;

float:left/right;

overflow:hidden;
```

margin 合并由于并没有影响到大体结构，一般在制作项目的时候，把上下间距算成一个即可。
