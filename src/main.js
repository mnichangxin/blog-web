import Vue from 'vue'
import VueRouter from 'vue-router'

import Container from './components/Container.vue'

import './assets/style/reset.css'
import './assets/style/app.css'

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
    render: h => h(Container)
})