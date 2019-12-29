import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '@pages/App.vue'
import '@styles/app.css'

Vue.use(VueRouter)

new Vue({
    el: '#app',
    router: new VueRouter({
        // routes: [
        //     {
        //         path: '/home',
        //         component: Home
        //     },
        //     {
        //         path: '/about',
        //         component: About
        //     }
        // ]
    }),
    render: h => h(App)
})