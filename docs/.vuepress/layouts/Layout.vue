<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
import Home from '../pages/home/index.vue';
</script>

<template>
  <ParentLayout>
    <template #page-top>
      <Home />
    </template>
  </ParentLayout>
</template>
