# Vue - 图形验证码组件

基于 Canvas 绘制的图形验证码组件，支持随机字体大小、随机旋转、干扰线和干扰点，适用于 Vue 2 项目的登录页面。

## 组件代码

`SIdentify.vue`

```vue
<template>
  <!-- 验证码组件容器 -->
  <div class="s-canvas">
    <canvas id="s-canvas" :width="contentWidth" :height="contentHeight"></canvas>
  </div>
</template>

<script>
export default {
  name: 'SIdentify',
  props: {
    identifyCode: {
      // 验证码字符串
      type: String,
      default: '1234',
    },
    fontSizeMin: {
      // 字体大小最小值（px）
      type: Number,
      default: 25,
    },
    fontSizeMax: {
      // 字体大小最大值（px）
      type: Number,
      default: 35,
    },
    backgroundColorMin: {
      // 背景色 RGB 分量最小值
      type: Number,
      default: 200,
    },
    backgroundColorMax: {
      // 背景色 RGB 分量最大值
      type: Number,
      default: 220,
    },
    dotColorMin: {
      // 干扰点颜色 RGB 分量最小值
      type: Number,
      default: 60,
    },
    dotColorMax: {
      // 干扰点颜色 RGB 分量最大值
      type: Number,
      default: 120,
    },
    contentWidth: {
      // 画布宽度（px）
      type: Number,
      default: 116,
    },
    contentHeight: {
      // 画布高度（px）
      type: Number,
      default: 38,
    },
  },
  methods: {
    // 生成 [min, max) 范围内的随机整数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 生成随机 RGB 颜色字符串
    randomColor(min, max) {
      const r = this.randomNum(min, max);
      const g = this.randomNum(min, max);
      const b = this.randomNum(min, max);
      return `rgb(${r},${g},${b})`;
    },
    // 绘制验证码图片（背景 + 文字 + 干扰线 + 干扰点）
    drawPic() {
      const canvas = document.getElementById('s-canvas');
      const ctx = canvas.getContext('2d');
      ctx.textBaseline = 'bottom';

      // 绘制背景
      ctx.fillStyle = this.randomColor(this.backgroundColorMin, this.backgroundColorMax);
      ctx.fillRect(0, 0, this.contentWidth, this.contentHeight);

      // 绘制每个字符
      for (let i = 0; i < this.identifyCode.length; i++) {
        this.drawText(ctx, this.identifyCode[i], i);
      }

      this.drawLine(ctx);
      this.drawDot(ctx);
    },
    // 绘制单个字符（随机大小、随机旋转）
    drawText(ctx, txt, i) {
      ctx.fillStyle = this.randomColor(50, 160);
      ctx.font = this.randomNum(this.fontSizeMin, this.fontSizeMax) + 'px SimHei';
      const x = (i + 1) * (this.contentWidth / (this.identifyCode.length + 1));
      const y = this.randomNum(this.fontSizeMax, this.contentHeight - 5);
      const deg = this.randomNum(-30, 30);

      // 平移坐标原点并旋转
      ctx.translate(x, y);
      ctx.rotate((deg * Math.PI) / 180);
      ctx.fillText(txt, 0, 0);

      // 恢复坐标系
      ctx.rotate((-deg * Math.PI) / 180);
      ctx.translate(-x, -y);
    },
    // 绘制干扰线
    drawLine(ctx) {
      for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = this.randomColor(100, 200);
        ctx.beginPath();
        ctx.moveTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight));
        ctx.lineTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight));
        ctx.stroke();
      }
    },
    // 绘制干扰点
    drawDot(ctx) {
      for (let i = 0; i < 30; i++) {
        ctx.fillStyle = this.randomColor(0, 255);
        ctx.beginPath();
        ctx.arc(
          this.randomNum(0, this.contentWidth),
          this.randomNum(0, this.contentHeight),
          1,
          0,
          2 * Math.PI
        );
        ctx.fill();
      }
    },
  },
  watch: {
    // 验证码字符串变化时重新绘制
    identifyCode() {
      this.drawPic();
    },
  },
  mounted() {
    this.drawPic();
  },
};
</script>
```

## 使用方式

在父组件中引入并使用该组件，将验证码字符串通过 `identifyCode` 属性传入：

```html
<SIdentify :identifyCode="identifyCode"></SIdentify>
```

**父组件示例：**

```javascript
import SIdentify from './SIdentify.vue';

export default {
  components: { SIdentify },
  data() {
    return {
      identifyCode: '',
      identifyCodes: '0123456789abcdefghijklmnopqrstuvwxyz',
    };
  },
  methods: {
    // 生成随机验证码
    refreshCode() {
      this.identifyCode = '';
      for (let i = 0; i < 4; i++) {
        this.identifyCode += this.identifyCodes[
          Math.floor(Math.random() * this.identifyCodes.length)
        ];
      }
    },
  },
  mounted() {
    this.refreshCode();
  },
};
```
