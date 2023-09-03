<script setup>
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- 一级路由出口 -->
  <RouterView />
  <div class="text">test text</div>
</template>

<style scoped lang="scss">
  .text{
    color: $priceColor;
  }
</style>