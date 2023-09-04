<template>
    <div>
        <LayoutNav />
        <LayoutHeader/>
        <RouterView />
        <LayoutFooter />
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import LayoutNav from './components/LayoutNav';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
</script>