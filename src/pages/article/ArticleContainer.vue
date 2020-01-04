<template>
    <Body>
        <div class="article-container">
            <ArticleList />
            <Pagination
                class="pagination"
                :total="50"
                :currentPage="1"
                @prev-click="onPrevClick" />
        </div>
    </Body>
</template>

<script>
    import Pagination from '@components/Pagination.vue'
    import Body from '@pages/body/body.vue'
    import ArticleList from '@pages/article/ArticleList.vue'

    export default {
        name: 'ArticleContainer',
        components: {
            Pagination,
            Body,
            ArticleList
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
