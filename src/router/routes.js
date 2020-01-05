import ArticleList from '@pages/articleList/ArticleList.vue'
import Article from '@pages/article/article.vue'

export default [
    {
        path: '/',
        component: ArticleList
    },
    {
        path: '/articleList',
        component: ArticleList
    },
    {
        path: '/article',
        component: Article
    }
]
