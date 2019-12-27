<!-- 文章项组件 -->

<template>
    <li class="article">
        <div class="article-top">
            <div class="article-title">{{ article.title }}</div>
            <div class="article-date">
                <img class="article-date-icon" v-bind:src="date_icon_src" /> 
                <span class="article-date-text">{{ article.date }}</span>
            </div>
        </div>
        <div class="article-introduction">
            <span class="article-introduction-text">{{ article.introduction }}</span>
            <span class="article-introduction-split"></span>
        </div>
        <div class="article-bottom">
            <div class="article-category">
                <img class="article-category-icon" v-bind:src="category_icon_src" /> 
                <span class="article-category-text">{{ article.category }}</span>
            </div>
            <ul class="article-tags">
                <img class="article-tag-icon" v-bind:src="tag_icon_src" />
                <li class="article-tag" v-for="(tag, index) in article.tags" v-bind:key="index">{{ tag }}</li>
            </ul>
        </div>
    </li>
</template>

<script>
    import date_icon_src from '../assets/icon/date.png'
    import category_icon_src from '../assets/icon/category.png'
    import tag_icon_src from '../assets/icon/tag.png'

    export default {
        name: 'Article',
        props: {
            article: Object,
            default: function() {
                return {
                    title: '',
                    date: '',
                    introduction: '',
                    category: '',
                    tags: []
                }
            }
        },
        data() {
            return {
                date_icon_src: date_icon_src,
                category_icon_src: category_icon_src,
                tag_icon_src: tag_icon_src
            }
        }
    }
</script>
