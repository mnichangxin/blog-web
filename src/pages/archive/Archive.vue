<template>
    <Body>
        <ul class="archive">
            <li class="archive-data-item" v-for="(archive, index) in archiveListData" :key="index">
                <div class="archive-date">
                    <span>{{ archive.date }}</span>
                </div>
                <ul class="archive-list">
                    <li class="archive-item" v-for="(archiveItem, index) in archive.list" :key="index">
                        <div class="archive-item-top">
                            <div class="archive-item-title">
                                <router-link to="/article">{{ archiveItem.title }}</router-link>
                            </div>
                            <div class="archive-item-date">
                                <span class="archive-item-date-icon"><i class="fa fa-calendar"></i></span>
                                <span class="archive-item-date-text">{{ archiveItem.date }}</span>
                            </div>
                        </div>
                        <div class="archive-item-bottom">
                            <div class="archive-item-category">
                                <span class="archive-item-category-icon"><i class="fa fa-book"></i></span>
                                <TagCloud class="archive-item-tags-cloud" :tags="[ archiveItem.category ]" />
                            </div>
                            <div class="archive-item-tags">
                                <span class="archive-item-tags-icon"><i class="fa fa-tags"></i></span>
                                <TagCloud class="archive-item-tags-cloud" :tags="archiveItem.tags" />
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </Body>
</template>

<script>
    import Body from '@pages/body/Body.vue'
    import TagCloud from '@components/TagCloud.vue'

    export default {
        name: 'Archive',
        components: {
            Body,
            TagCloud
        },
        data () {
            return {
                archiveListData: [{
                    date: '2020',
                    list: [{
                        title: '文章标题',
                        date: '2018-08-15',
                        category: '前端',
                        tags: [
                            '标签1',
                            '标签2',
                            '标签3'
                        ]
                    }, {
                        title: '文章标题',
                        date: '2018-08-14',
                        category: '前端',
                        tags: [
                            '标签1',
                            '标签2',
                            '标签3'
                        ]
                    }, {
                       title: '文章标题',
                        date: '2018-08-14',
                        category: '前端',
                        tags: [
                            '标签1',
                            '标签2',
                            '标签3'
                        ] 
                    }]
                }, {
                    date: '2019',
                    list: [{
                        title: '文章标题',
                        date: '2018-08-15',
                        category: '前端',
                        tags: [
                            '标签1',
                            '标签2',
                            '标签3'
                        ]
                    }, {
                        title: '文章标题',
                        date: '2018-08-14',
                        category: '前端',
                        tags: [
                            '标签1',
                            '标签2',
                            '标签3'
                        ] 
                    }, {
                       title: '文章标题',
                        date: '2018-08-14',
                        category: '前端',
                        tags: [
                            '标签1',
                            '标签2',
                            '标签3'
                        ] 
                    }]
                }, {
                    date: '2018',
                    list: [{
                        title: '文章标题',
                        date: '2018-08-15',
                        category: '前端',
                        tags: [
                            '标签1',
                            '标签2',
                            '标签3'
                        ]
                    }, {
                        title: '文章标题',
                        date: '2018-08-14',
                        category: '前端',
                        tags: [
                            '标签1',
                            '标签2',
                            '标签3'
                        ] 
                    }, {
                       title: '文章标题',
                        date: '2018-08-14',
                        category: '前端',
                        tags: [
                            '标签1',
                            '标签2',
                            '标签3'
                        ] 
                    }]
                }]
            }
        }
    }
</script>
