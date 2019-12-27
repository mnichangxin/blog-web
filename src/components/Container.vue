<!-- 顶层容器组件 -->

<template>
    <div class="blog-container">
        <Aside></Aside>
        <MainSection></MainSection>
    </div>
</template>

<script>
    import Aside from './Aside.vue'
    import MainSection from './MainSection.vue'

    export default {
        name: 'BlogContainer',
        components: {
            Aside,
            MainSection
        }
    }
</script>
