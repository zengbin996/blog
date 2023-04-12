<template>
  <div class="md:container md:m-auto text-center">
    <p class="text-xl md:text-2xl leading-loose border-gray-800 dark:border-gray-200 pb-1 mt-8 inline-block">
      我的相册
    </p>

    <div>
      <div
        ref="imgFirstContainer"
        :style="`height: ${imgHeight.value[0]}`"
        class="w-full px-2 pt-2 md:px-0 md:grid md:grid-cols-24 md:gap-2 grid-rows-1 img-con1"
      >
        <div class="md:col-span-10 lg:col-span-7 xl:col-span-5 img-box">
          <img src="https://s1.ax1x.com/2022/04/19/L0fZff.md.jpg" />
        </div>

        <div class="hidden md:block md:col-span-14 lg:col-span-10 xl:col-span-7 img-box">
          <img src="https://s1.ax1x.com/2022/04/19/L0fVtP.md.jpg" />
        </div>

        <div class="hidden lg:block lg:col-span-7 xl:col-span-5 img-box">
          <img src="https://s1.ax1x.com/2022/04/19/L0fn1S.md.jpg" />
        </div>

        <div class="hidden xl:block xl:col-span-7 img-box">
          <img src="https://s1.ax1x.com/2022/04/19/L0fimd.md.jpg" />
        </div>
      </div>

      <div
        ref="imgSecondContainer"
        :style="`height: ${imgHeight.value[1]}`"
        class="w-full mt-2 px-2 lg:px-0 lg:grid lg:grid-cols-24 md:gap-2 grid-rows-1 img-con2"
      >
        <div class="lg:col-span-12 xl:col-span-9 img-box">
          <img src="https://s1.ax1x.com/2022/04/19/L0fkTI.md.jpg" />
        </div>

        <div class="hidden lg:block lg:col-span-12 xl:col-span-9 img-box">
          <img src="https://s1.ax1x.com/2022/04/19/L0fEkt.md.jpg" />
        </div>

        <div class="hidden xl:block xl:col-span-6 img-box">
          <img src="https://s1.ax1x.com/2022/04/19/L0fF0A.md.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, reactive, ref } from 'vue';
import $ from 'jquery';
import _ from 'lodash';

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

  //图片显示动画效果
  $('.img-box').each(function () {
    if ($(this).css('display') === 'block') {
      $(this).find('img').css('opacity', '1');
    } else {
      $(this).find('img').css('opacity', '0');
    }
  });
};

nextTick(() => {
  calcHeight();
  window.onresize = _.throttle(() => calcHeight(), 300);
});
</script>

<style scoped>
.img-con1 img,
.img-con2 img {
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1.5s ease-in, transform 0.2s linear;
  object-fit: cover;
  cursor: pointer;
}

.img-con1 img:hover,
.img-con2 img:hover {
  transform: scale(1.1);
}

.img-box {
  overflow: hidden;
}
</style>
