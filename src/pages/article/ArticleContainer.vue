<template>
    <div class="article-container">
        <ArticleList />
        <Pagination
            class="pagination"
            :total="100"
            :currentPage="3"
            @prev-click="onPrevClick" />
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
        },
        methods: {
            onPrevClick (curPage) {
                console.log(curPage)
            }
        }
    }
</script>

<style>
   .pagination {
       padding-bottom: 50px;
   }
</style>
