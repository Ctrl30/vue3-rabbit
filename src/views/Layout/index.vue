<template>
    <div>
        <LayoutFixed />
        <LayoutNav />
        <LayoutHeader />
        <RouterView />
        <LayoutFooter />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useCategoryStore } from '@/stores/category';
import LayoutNav from './components/LayoutNav';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import LayoutFixed from './components/LayoutFixed.vue';

const store = useCategoryStore();

onMounted(() => {
    // 触发列表Category
    store.getCategory();
})
</script>