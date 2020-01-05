<template>
    <Body>
        <div class="article">
            <div class="article-nav">
                <div class="article-nav-title">
                    <a>标题</a>
                </div>
                <div class="article-nav-date">
                    <span class="article-nav-date-icon"><i class="fa fa-calendar"></i></span>
                    <div class="article-nav-date-text">2019-01-20</div>
                </div>
            </div>
            <div class="article-archive">
                <div class="article-archive-category">
                    <span class="article-archive-category-icon"><i class="fa fa-book"></i></span>
                    <TagCloud class="article-archive-tags-cloud" :tags="[ '分类1' ]" />
                </div>
                <div class="article-archive-tags">
                    <span class="article-archive-tags-icon"><i class="fa fa-tags"></i></span>
                    <TagCloud class="article-archive-tags-cloud" :tags="[ '标签1', '标签2', '标签3' ]" />
                </div>
            </div>
            <div class="article-main" v-html="articleContent"></div>
        </div>
    </Body>
</template>

<script>
    import marked from 'marked'
    import Body from '@pages/body/body.vue'
    import TagCloud from '@components/TagCloud.vue'

    export default {
        name: 'Article',
        components: {
            Body,
            TagCloud
        },
        data () {
            return {
                articleContent: ''
            }
        },
        created () {
            const str = '# blog-web'
            this.articleContent = marked(str)
        }
    }
</script>
