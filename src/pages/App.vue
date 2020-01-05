<template>
    <div class="container">
        <Aside />
        <router-view></router-view>
    </div>
</template>

<script>
    import Aside from '@pages/aside/Aside.vue'

    export default {
        name: 'App',
        components: {
            Aside
        }
    }
</script>
