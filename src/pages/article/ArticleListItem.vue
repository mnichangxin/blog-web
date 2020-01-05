<template>
    <li class="article-list-item">
        <div class="article-list-item-top">
            <div class="article-list-item-title">
                <a>{{ articleListItemData.title }}</a>
            </div>
            <div class="article-list-item-date">
                <span class="article-list-item-date-icon"><i class="fa fa-calendar"></i></span>
                <div class="article-list-item-date-text">{{ articleListItemData.date }}</div>
            </div>
        </div>
        <div class="article-list-item-introduction">
            <span class="article-list-item-introduction-text">{{ articleListItemData.introduction }}</span>
            <span class="article-list-item-introduction-split"></span>
        </div>
        <div class="article-list-item-bottom">
            <div class="article-list-item-category">
                <span class="article-list-item-category-icon"><i class="fa fa-book"></i></span>
                <TagCloud class="article-list-item-tags-cloud" :tags="[ articleListItemData.category ]" />
            </div>
            <div class="article-list-item-tags">
                <span class="article-list-item-tags-icon"><i class="fa fa-tags"></i></span>
                <TagCloud class="article-list-item-tags-cloud" :tags="articleListItemData.tags" />
            </div>
            <div class="article-list-item-detail">
                <span>阅读全文</span>
                <span>&gt;&gt;</span>
            </div>
        </div>
    </li>
</template>

<script>
    import TagCloud from '@components/TagCloud.vue'

    export default {
        name: 'ArticleListItem',
        components: {
            TagCloud
        },
        props: {
            articleListItemData: Object
        }
    }
</script>
