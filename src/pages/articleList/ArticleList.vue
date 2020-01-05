<template>
    <Body>
        <ul class="article-list">
            <template v-for="(articleListItemData, index) in articleListData">
                <ArticleListItem
                    :articleListItemData="articleListItemData"
                    :key="index" />
            </template>
        </ul>
        <Pagination
            class="pagination"
            :total="50"
            :currentPage="1"
            @prev-click="onPrevClick" />
    </Body>
</template>

<script>
    import Pagination from '@components/Pagination.vue'
    import Body from '@pages/body/body.vue'
    import ArticleListItem from '@pages/articleList/ArticleListItem.vue'

    export default {
        name: 'ArticleList',
        components: {
            Pagination,
            Body,
            ArticleListItem
        },
        data () {
            return {
                articleListData: [
                    {
                        title: '文章标题',
                        date: '2018-08-15',
                        introduction: '文章内容文章内容文章内容文章内容文章内容文章内容',
                        category: '前端',
                        tags: [
                            '标签1',
                            '标签2',
                            '标签3'
                        ]
                    },
                    {
                        title: '文章标题',
                        date: '2018-08-15',
                        introduction: '文章内容文章内容文章内容文章内容文章内容文章内容',
                        category: '前端',
                        tags: [
                            '标签1',
                            '标签2',
                            '标签3'
                        ]
                    },
                    {
                        title: '文章标题',
                        date: '2018-08-15',
                        introduction: '文章内容文章内容文章内容文章内容文章内容文章内容',
                        category: '前端',
                        tags: [
                            '标签1',
                            '标签2',
                            '标签3'
                        ]
                    },
                    {
                        title: '文章标题',
                        date: '2018-08-15',
                        introduction: '文章内容文章内容文章内容文章内容文章内容文章内容',
                        category: '前端',
                        tags: [
                            '标签1',
                            '标签2',
                            '标签3'
                        ]
                    },
                    {
                        title: '文章标题',
                        date: '2018-08-15',
                        introduction: '文章内容文章内容文章内容文章内容文章内容文章内容',
                        category: '前端',
                        tags: [
                            '标签1',
                            '标签2',
                            '标签3'
                        ]
                    },
                    {
                        title: '文章标题',
                        date: '2018-08-15',
                        introduction: '文章内容文章内容文章内容文章内容文章内容文章内容',
                        category: '前端',
                        tags: [
                            '标签1',
                            '标签2',
                            '标签3'
                        ]
                    }
                ]
            }
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
