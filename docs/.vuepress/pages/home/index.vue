<template>
  <div v-if="route.fullPath == '/'">
    <Map />
    <Photos />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import '../../styles/index.css';
import Map from './Map.vue';
import Photos from './Photos.vue';
const route = useRoute();
</script>
