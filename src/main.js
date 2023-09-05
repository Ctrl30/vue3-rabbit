// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'

import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.directive('img-lazy', {
    mounted(el, binding) {
        // le:指令绑定的那个元素
        // binding binding.value = 指令等于号后面绑定的表达式的值 图片url
        console.log('el', el, binding.value)
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                if (isIntersecting) {
                    el.src = binding.value
                }
                console.log('isIntersecting', isIntersecting)
            }
        )
    }
})
