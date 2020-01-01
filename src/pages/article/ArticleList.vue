<template>
    <ul class="article-list">
        <li class="article"
            v-for="(article, index) in article_list"
            :key="index"
            :article="article">
            <div class="article-top">
                <div class="article-title">
                    <a>{{ article.title }}</a>
                </div>
                <div class="article-date">
                    <span class="article-date-icon"><i class="fa fa-calendar"></i></span>
                    <div class="article-date-text">{{ article.date }}</div>
                </div>
            </div>
            <div class="article-introduction">
                <span class="article-introduction-text">{{ article.introduction }}</span>
                <span class="article-introduction-split"></span>
            </div>
            <div class="article-bottom">
                <div class="article-category">
                    <span class="article-category-icon"><i class="fa fa-book"></i></span>
                    <TagCloud class="article-tags-cloud" :tags="[ article.category ]" />
                </div>
                <div class="article-tags">
                    <span class="article-tags-icon"><i class="fa fa-tags"></i></span>
                    <TagCloud class="article-tags-cloud" :tags="article.tags" />
                </div>
                <div class="article-detail">
                    <span>阅读全文</span>
                    <span>&gt;&gt;</span>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    import TagCloud from '@components/TagCloud.vue'
    export default {
        name: 'ArticleList',
        components: {
            TagCloud
        },
        data () {
            return {
                article_list: [
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
        }
    }
</script>
