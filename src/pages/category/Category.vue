<template>
    <Body>
        <div class="category">
            <p class="category-header">
                <span class="category-header-title">分类 / 标签</span>
            </p>
            <div class="category-body">
                <div class="category-body-category">
                    <div
                        class="category-body-category-item"
                        v-for="(category, index) in data.category.data"
                        :key="index">
                        <span class="category-body-category-item-name">{{ category.name }}</span>
                        <span class="category-body-category-item-count">{{ category.count }}</span>
                    </div>
                </div>
                <p class="category-body-count">已有<span class="count-number"> {{ data.category.count }} </span>个分类，共计<span class="count-number"> {{ data.tags.count }} </span>个标签</p>
                <div class="category-body-tags">
                    <div
                        class="category-body-tags-item"
                        v-for="(weightedTag, index) in weightedTags"
                        :key="index">
                        <span
                            class="category-body-tags-item-name"
                            :style="`font-size:${weightedTag.tagStyle.fontSize}px; color:${weightedTag.tagStyle.color}`">{{ weightedTag.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </Body>
</template>

<script>
    import Body from '@pages/body/Body.vue'

    export default {
        name: 'Archive',
        components: {
            Body
        },
        data () {
            return {
                data: {
                    category: {
                        count: 17,
                        data: [{
                            name: '学习',
                            count: 7
                        }, {
                            name: '心情',
                            count: 2
                        }, {
                            name: '心情',
                            count: 1
                        }, {
                            name: '教程',
                            count: 2
                        }, {
                            name: '电影',
                            count: 1
                        }, {
                            name: '算法',
                            count: 1
                        }, {
                            name: '计划',
                            count: 5
                        }]
                    },
                    tags: {
                        count: 9,
                        data: [{
                            name: 'CDN',
                            count: 1
                        }, {
                            name: 'JavaScript',
                            count: 5
                        }, {
                            name: 'Python',
                            count: 2
                        }, {
                            name: '编译原理',
                            count: 2
                        }, {
                            name: 'Github',
                            count: 3
                        }, {
                            name: 'CSS',
                            count: 4
                        }, {
                            name: '项目管理',
                            count: 1
                        }, {
                            name: 'HTTP',
                            count: 9
                        }, {
                            name: 'IOS',
                            count: 3
                        }]
                    }
                }
            }
        },
        methods: {
            getWeightedTagStyle (count) {
                const style = {}
                if (count <= 2) {
                    style.fontSize = 16
                    style.color = '#808080'
                } else if (count > 2 && count <= 6) {
                    style.fontSize = 22
                    style.color = '#404040'
                } else {
                    style.fontSize = 26
                    style.color = '#000000'
                }
                return style
            }
        },
        computed: {
            weightedTags () {
                if (this.data) {
                    return this.data.tags.data.map(tag => ({
                        name: tag.name,
                        tagStyle: this.getWeightedTagStyle(tag.count)
                    }))
                } else {
                    return []
                }
            }
        }
    }
</script>
