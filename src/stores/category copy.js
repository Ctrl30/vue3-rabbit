import { defineStore } from 'pinia';
import { getCategoryApi } from '@/apis/layout';

// 选项式api写法
export const useCategoryStore = defineStore('category', {
    state: () => ({
        categoryList: []
    }),
    actions: {
        async getCategory() {
            console.log('hello ',this)
            const res = await getCategoryApi();
            this.categoryList = res.result;
        },
    }
})
