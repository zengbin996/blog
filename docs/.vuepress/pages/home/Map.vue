<template>
  <div class="md:container md:mx-auto">
    <!-- <h3 class="text-center text-2xl my-4">我的足迹</h3> -->
    <div class="charts-map" ref="chartDomRef"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { IsMedia } from '../../utils/index';
import china from './china.json';
import * as echarts from 'echarts';
echarts.registerMap('china', china);

const chartDomRef = ref(null);

//https://www.google.com/maps 查询坐标
const footprint = [
  [108.95024945477402, 34.265088968502866], //西安
  [108.48723804025089, 34.6096480104217], //咸阳
  [109.8069952653452, 33.39076295809011], //商洛
  [106.50461274792572, 34.75231283443789], //宝鸡
  [107.06296612985867, 33.11517652657251], //汉中
  [104.07191888366381, 30.608439333764853], //成都
  [108.36411157462854, 22.81804671389275], //南宁
  [109.1304633189505, 21.455419963427268], //北海
  [106.82197859551223, 22.81975309557381], //崇左
  [101.78997595640057, 36.62606210846314], //西宁
  [100.09243860466682, 36.91342612743801], //青海湖
  [120.37562258224959, 36.071273927765375], //青岛
  [119.29949096240252, 26.072603428811814], //福州
  [117.65377366577064, 24.510927756330577], //漳州
  [118.13967444423031, 24.494326102214718], //厦门
  [117.43557011619761, 23.687177337241792], //东山岛
  [118.17532735830969, 30.142162418139925], //黄山
  [114.17575248396336, 22.32851658753095], //香港
  [113.54105162106022, 22.196944412030653], //澳门
  [102.90325641348434, 31.110815569285716], //四姑娘山
  [101.9629193468851, 30.033013581829877], //木格措
  [103.04416636409177, 30.009466813648647], //雅安
  [121.53716624090671, 36.919410544027315], //乳山市
  [122.11106477078646, 37.51989232507069], //威海市
  [121.45094555609734, 37.45932668985068], //烟台市
  [87.62111409309944, 43.828123127470654], //乌鲁木齐
  [84.30455275210899, 44.37451021659652], //乌苏市
  [81.3141822184842, 44.60632540263776], //赛里木湖
  [81.27708645535601, 43.90957167943459], //伊宁市
  [84.23052379664968, 43.296820219101306], //那拉提

  [126.98442713920417, 37.557685602850796], //首尔
  [129.0707283203815, 35.18278033722124], //釜山

  // [135.5080069427568, 34.66938229659487], //大阪
];

const echartsDraw = () => {
  const chartDom = chartDomRef.value;
  const myChart = echarts.init(chartDom);
  chartDom.removeAttribute('_echarts_instance_');
  const frequencyScatter = footprint.map(item => ({ value: item }));
  const option = {
    title: {
      show: true,
      text: '我的足跡',
      textStyle: {
        fontSize: 16,
        color: '#999',
      },
      left: 'center',
      top: '5%',
    },
    geo: {
      type: 'map',
      map: 'china',
      silent: true, //取消鼠标移入事件

      // roam: true,
      zoom: 1.4,
      regions: [
        {
          name: '南海诸岛',
          itemStyle: {
            // 隐藏地图
            opacity: 0, // 为 0 时不绘制该图形
          },
          label: {
            show: false, // 隐藏文字
          },
        },
      ],
      itemStyle: {
        areaColor: '#00000000', //rgba设置透明度0
        borderColor: localStorage.theme === 'light' ? '#666' : '#409EFF', //省份边框颜色
        borderWidth: IsMedia() === 'm' ? 0.1 : 0.3, //省份边框
      },
    },
    series: [
      {
        data: frequencyScatter,
        type: 'effectScatter',
        coordinateSystem: 'geo',
        symbolSize: IsMedia() === 'm' ? 5 : 10,
        rippleEffect: {
          scale: IsMedia() === 'm' ? 3 : 5,
        },
      },
    ],
  };

  myChart.setOption(option);

  window.addEventListener('resize', function () {
    myChart.resize();
  });
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    echartsDraw();
  }
});
</script>

<style scoped>
.charts-map {
  height: 50vw;
}

@media screen and (max-width: 768px) {
  .charts-map {
    height: 40vh;
  }
}
</style>
