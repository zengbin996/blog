<template>
  <div class="md:container md:m-auto text-center photo-con pt-2">
    <h3 class="text-2xl">我的相册</h3>
    <p class="leading-8 pt-4 mb-6">生活并不缺乏美，只是你缺乏一双发现美的眼睛</p>

    <div class="flex gap-2 w-full" ref="imgFirstContainer" :style="`height: ${imgHeight.value[0]}px`">
      <div class="w-full lg:w-1/2 xl:w-5/12 2xl:w-4/12 img-box"><img :src="tencentOSS[4]" /></div>
      <div class="hidden lg:block lg:w-1/2 xl:w-3/12 2xl:w-2/12 img-box"><img :src="tencentOSS[1]" /></div>
      <div class="hidden xl:block xl:w-4/12 2xl:w-3/12 img-box"><img :src="tencentOSS[9]" /></div>
      <div class="hidden 2xl:block w-3/12 img-box"><img :src="tencentOSS[2]" /></div>
    </div>

    <div ref="imgSecondContainer" :style="`height: ${imgHeight.value[1]}px`" class="flex gap-2 w-full mt-2">
      <div class="w-full 2xl:w-3/12 lg:w-7/12 img-box"><img :src="tencentOSS[0]" /></div>
      <div class="hidden lg:block lg:w-5/12 2xl:w-4/12 img-box"><img :src="tencentOSS[5]" /></div>
      <div class="hidden 2xl:block 2xl:w-5/12 img-box"><img :src="tencentOSS[6]" /></div>
    </div>

    <div class="flex gap-2 w-full mt-2" :style="`height: ${imgHeight.value[0]}px`">
      <div class="w-full lg:w-1/2 xl:w-5/12 2xl:w-4/12 img-box"><img :src="tencentOSS[7]" /></div>
      <div class="hidden lg:block lg:w-1/2 xl:w-3/12 2xl:w-2/12 img-box"><img :src="tencentOSS[8]" /></div>
      <div class="hidden xl:block xl:w-4/12 2xl:w-3/12 img-box"><img :src="tencentOSS[3]" /></div>
      <div class="hidden 2xl:block w-3/12 img-box"><img :src="tencentOSS[10]" /></div>
    </div>

    <div :style="`height: ${imgHeight.value[1]}px`" class="flex gap-2 w-full mt-2">
      <div class="w-full 2xl:w-3/12 lg:w-7/12 img-box"><img :src="tencentOSS[11]" /></div>
      <div class="hidden lg:block lg:w-5/12 2xl:w-4/12 img-box"><img :src="tencentOSS[12]" /></div>
      <div class="hidden 2xl:block 2xl:w-5/12 img-box"><img :src="tencentOSS[13]" /></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue';
function throttle(func, wait, options) {
  var leading = true,
    trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    leading: leading,
    maxWait: wait,
    trailing: trailing,
  });
}

let tencentOSS = [
  'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/%E4%B8%9C%E5%B1%B1%E5%B2%9B.jpg',
  'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/%E4%B8%9C%E5%B1%B1%E5%B2%9B%E6%A1%A5.jpg',
  'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/%E4%BA%91%E6%B4%9E%E5%B2%A9.jpg',
  'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/%E5%8C%97%E6%B5%B7.jpg',
  'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/%E5%8E%A6%E9%97%A8.jpg',
  'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/%E5%8E%A6%E9%97%A8%E5%A4%9C%E6%99%9A%E5%9F%8E%E5%A0%A1.jpg',
  'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/%E5%A4%AA%E7%99%BD%E5%B1%B1.jpg',
  'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/%E5%BE%B7%E5%A4%A9%E7%80%91%E5%B8%83.jpg',
  'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/%E7%A7%8B%E5%A4%A9%E8%90%BD%E5%8F%B6.jpg',
  'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/%E9%9B%AA%E5%90%8E.jpg',
  'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/%E9%9D%92%E5%B2%9B-%E8%87%AA%E5%B7%B1.jpg',
  'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/%E9%9D%92%E5%B2%9B%E4%BF%A1%E5%8F%B7%E5%A1%94.jpg',
  'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/%E9%9D%92%E5%B2%9B%E6%B5%AA%E8%8A%B1.jpg',
  'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/%E9%9D%92%E5%B2%9B%E6%B5%B7%E5%B2%9B.jpg',
  'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/%E9%BB%84%E5%B1%B1.jpg',
  'https://blog-zengbin-1258070316.cos.ap-chengdu.myqcloud.com/%E9%BB%84%E5%B1%B1%E8%87%AA%E5%B7%B1.jpg',
];

tencentOSS = tencentOSS.map(a => (a += '?imageMogr2/thumbnail/!25p'));

const imgFirstContainer = ref(null);
const imgSecondContainer = ref(null);
const imgHeight = reactive({ value: [0, 0] });

//计算图片高度
const calcHeight = () => {
  if (window.matchMedia('(max-width:768px)').matches) {
    imgHeight.value[0] = 'auto';
    imgHeight.value[1] = 'auto';
  } else if (window.matchMedia('(max-width:1024px)').matches) {
    imgHeight.value[0] = imgFirstContainer.value.offsetWidth * 0.55;
    imgHeight.value[1] = imgSecondContainer.value.offsetWidth * 0.75;
  } else if (window.matchMedia('(max-width:1280px)').matches) {
    imgHeight.value[0] = imgFirstContainer.value.offsetWidth * 0.35;
    imgHeight.value[1] = imgSecondContainer.value.offsetWidth * 0.4;
  } else {
    imgHeight.value[0] = imgFirstContainer.value.offsetWidth * 0.25;
    imgHeight.value[1] = imgSecondContainer.value.offsetWidth * 0.33;
  }

  // 图片显示动画效果;
  document.querySelectorAll('.img-box').forEach(function (element) {
    if (window.getComputedStyle(element).display === 'block') {
      element.querySelector('img').style.opacity = '1';
    } else {
      element.querySelector('img').style.opacity = '0';
    }
  });
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    calcHeight();
    window.onresize = throttle(() => calcHeight(), 300);
  }
});
</script>

<style lang="scss" scoped>
.photo-con {
  .img-box {
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 100%;
    transition: opacity 1.5s ease-in, transform 0.2s linear;
    object-fit: cover;
    cursor: pointer;
  }

  img:hover {
    transform: scale(1.1);
  }
}
</style>
