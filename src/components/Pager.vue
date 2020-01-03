<template>
    <ul>
        <template v-for="(pager, index) in pagers">
            <li class="pagination-pager-number"
                :class="pager.value == currentPage && 'pagination-pager-number-active'"
                :key="index"
                v-if="pager.type === 'number' || pager.type === 'more' && (pager.showPrevMore || pager.showNextMore)"><a @click="onPagerClick(pager)">{{ pager.value }}</a></li>
        </template>
    </ul>
</template>

<script>
    export default {
        name: 'Pager',
        props: {
            currentPage: Number,
            pageCount: Number,
            pagerCount: Number
        },
        methods: {
            onPagerClick (pager) {
                const { type, value } = pager
                const currentPage = this.currentPage
                const pagerCountOffset = this.pagerCount - 2
                let nextPage = value
                if (type === 'more') {
                    pager.showPrevMore ? nextPage = currentPage - pagerCountOffset : nextPage = currentPage + pagerCountOffset
                }
                this.$emit('pager-change', nextPage)
            }
        },
        computed: {
            pagers () {
                const currentPage = Number(this.currentPage)
                const pageCount = Number(this.pageCount)

                const pagerCount = Number(this.pagerCount)
                const halfPagerCount = (pagerCount - 1) / 2

                let showPrevMore = false
                let showNextMore = false

                if (pageCount > pagerCount) {
                    if (currentPage > pagerCount - halfPagerCount) {
                        showPrevMore = true
                    }
                    if (currentPage < pageCount - halfPagerCount) {
                        showNextMore = true
                    }
                }

                let array = []

                if (showPrevMore && !showNextMore) {
                    const startPage = pageCount - (pagerCount - 2)
                    for (let i = startPage; i < pageCount; i++) {
                        array.push({ value: i })
                    }
                } else if (!showPrevMore && showNextMore) {
                    for (let i = 2; i < pagerCount; i++) {
                        array.push({ value: i })
                    }
                } else if (showPrevMore && showNextMore) {
                    const offset = Math.floor(pagerCount / 2) - 1
                    for (let i = currentPage - offset; i <= currentPage + offset; i++) {
                        array.push({ value: i })
                    }
                } else {
                    for (let i = 2; i < pageCount; i++) {
                        array.push({ value: i })
                    }
                }

                array = array.map(_ => ({ type: 'number', value: _.value }))
                array = [{
                    type: 'number',
                    value: 1
                }, {
                    type: 'more',
                    showPrevMore: showPrevMore,
                    value: '«'
                }, ...array, {
                    type: 'more',
                    showNextMore: showNextMore,
                    value: '»'
                }, {
                    type: 'number',
                    value: pageCount
                }]

                return array
            }
        }
    }
</script>
