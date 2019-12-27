<!-- 右侧主展示组件 -->

<template>
    <div class="main-section">
        <ArticleList></ArticleList>
        <Footer></Footer>
    </div>
</template>

<script>
    import ArticleList from './ArticleList.vue'
    import Footer from './Footer.vue'

    export default {
        name: 'MainSection',
        components: {
            ArticleList,
            Footer
        }
    }
</script>