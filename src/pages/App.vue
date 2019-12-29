<template>
    <div class="container">
        <Aside />
        <ArticleContainer />
    </div>
</template>

<script>
    import Aside from '@pages/aside/Aside.vue'
    import ArticleContainer from '@pages/article/ArticleContainer.vue'

    export default {
        name: 'App',
        components: {
            Aside,
            ArticleContainer
        }
    }
</script>
