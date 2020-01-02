<template>
    <div class="article-container">
        <ArticleList />
        <Pagination class="pagination" />
        <Footer />
    </div>
</template>

<script>
    import Pagination from '@components/Pagination.vue'
    import ArticleList from '@pages/article/ArticleList.vue'
    import Footer from '@pages/footer/Footer.vue'

    export default {
        name: 'ArticleContainer',
        components: {
            Pagination,
            ArticleList,
            Footer
        }
    }
</script>

<style>
   .pagination {
       padding-bottom: 50px;
   }
</style>
