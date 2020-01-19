import ArticleList from '@pages/articleList/ArticleList.vue'
import Article from '@pages/article/Article.vue'
import Archive from '@pages/archive/Archive.vue'

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
    },
    {
        path: '/archive',
        component: Archive
    }
]
