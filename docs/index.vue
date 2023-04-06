<template>
  <div class="content">
    <Navbar />
    <main>
      <div>一条有梦想的咸鱼</div>
    </main>
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
.content {
  padding-top: 60px; /* 添加一些顶部空间，避免被导航栏遮挡 */
}
</style>
