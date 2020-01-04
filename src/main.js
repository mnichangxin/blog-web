import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '@pages/App.vue'
import '@styles/app.css'
import routes from '@router/routes'

Vue.use(VueRouter)

new Vue({ // eslint-disable-line no-new
    el: '#app',
    router: new VueRouter({ routes }),
    render: h => h(App)
})
