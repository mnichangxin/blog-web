<template>
    <div class="article-container">
        <ArticleList />
        <Footer />
    </div>
</template>

<script>
    import ArticleList from './ArticleList.vue'
    import Footer from '@pages/footer/Footer.vue'

    export default {
        name: 'ArticleContainer',
        components: {
            ArticleList,
            Footer
        }
    }
</script>