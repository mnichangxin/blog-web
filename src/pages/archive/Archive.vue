<template>
    <Body>
        <div class="archive">
            <ul class="archive-list">
                <li v-for="(archiveItem, index) in archiveListData" :key="index">
                    <div class="archive-date">{{ archiveItem.date }}</div>
                    <ul class="archive-item-list"></ul>
                </li>
            </ul>
        </div>
    </Body>
</template>

<script>
    import Body from '@pages/body/Body.vue'
    // import TagCloud from '@components/TagCloud.vue'

    export default {
        name: 'Archive',
        components: {
            Body,
            // TagCloud
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
                }]
            }
        }
    }
</script>
