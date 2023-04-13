<template>
  <div v-if="route.fullPath == '/'">
    <Map />
    <Motto />
    <Photos />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import Motto from './Motto.vue';
import Map from './Map.vue';
import Photos from './Photos.vue';
const route = useRoute();
</script>
