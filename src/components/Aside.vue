<!-- 左侧边栏组件 -->

<template>
    <div class="aside nav">
        <AsideTop></AsideTop>
        <AsideBottom></AsideBottom>
    </div>
</template>

<script>
    import AsideTop from './AsideTop.vue'
    import AsideBottom from './AsideBottom.vue'

    export default {
        name: 'Aside',
        components: {
            AsideTop,
            AsideBottom
        }
    }
</script>
