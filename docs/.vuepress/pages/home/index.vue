<template>
  <div v-if="route.fullPath == '/'">
    <Map />
    <Motto />
    <Photos />
    <!-- <p class="text-center text-sm">
      本网站由
      <a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral">又拍云</a> 提供CDN加速/云存储功能
    </p> -->
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Motto from './Motto.vue';
import Map from './Map.vue';
import Photos from './Photos.vue';
const route = useRoute();
</script>
