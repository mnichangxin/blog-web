<template>
    <ul class="pagination">
        <li class="pagination-prev" v-show="internalCurrentPage != 1"><a>« Prev</a></li>
        <li class="pagination-pager">
            <ul>
                <template v-for="(pager, index) in pagers">
                    <li class="pagination-pager-number"
                        :class="pager.value == internalCurrentPage && 'pagination-pager-number-active'"
                        :key="index"
                        v-if="pager.type === 'number' || pager.type === 'more' && (pager.showPrevMore || pager.showNextMore)"><a>{{ pager.value }}</a></li>
                </template>
            </ul>
        </li>
        <li class="pagination-next" v-show="internalCurrentPage != internalPageCount"><a>Next »</a></li>
    </ul>
</template>

<script>
    export default {
        name: 'Pagination',
        props: {
            total: Number,
            pageCount: Number,
            currentPage: {
                type: Number,
                default: 1
            },
            pageSize: {
                type: Number,
                default: 10
            },
            pagerCount: {
                type: Number,
                validator (value) {
                    return (value | 0) === value && value > 4 && value < 22 && (value % 2) === 1
                },
                default: 7
            }
        },
        data () {
            return {
                internalCurrentPage: 1,
                internalPageSize: 1
            }
        },
        methods: {
            getValidCurrentPage (value) {
                value = parseInt(value, 10)
                let resetValue = 1
                if (typeof this.internalPageCount === 'number') {
                    if (value > 1 && value <= this.internalPageCount) {
                        resetValue = value
                    } else if (value > this.internalCurrentPage) {
                        resetValue = this.internalCurrentPage
                    }
                }
                return resetValue
            }
        },
        computed: {
            internalPageCount () {
                if (typeof this.total === 'number') {
                    return Math.max(1, Math.ceil(this.total / this.internalPageSize))
                } else if (typeof this.pageCount === 'number') {
                    return Math.max(1, this.pageCount)
                }
                return 1
            },
            pagers () {
                const currentPage = Number(this.currentPage)
                const pageCount = Number(this.internalPageCount)

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
                    value: '...'
                }, ...array, {
                    type: 'more',
                    showNextMore: showNextMore,
                    value: '...'
                }, {
                    type: 'number',
                    value: pageCount
                }]

                return array
            }
        },
        watch: {
            currentPage: {
                immediate: true,
                handler (val) {
                    this.internalCurrentPage = this.getValidCurrentPage(val)
                }
            },
            pageSize: {
                immediate: true,
                handler (val) {
                    this.internalPageSize = isNaN(val) ? 10 : val
                }
            }
        }
    }
</script>

<style>
    .pagination {
        text-align: center;
    }
    .pagination li {
        display: inline-block;
        vertical-align: middle;
    }
    .pagination li a {
        cursor: pointer;
    }
    .pagination-prev, .pagination-next {
        margin: 0 10px;
    }
    .pagination-prev a, .pagination-next a {
        font-size: 16px;
    }
    .pagination-prev a:hover, .pagination-next a:hover {
        color: #ffffff;
    }
    .pagination-pager-number {
        margin: 0 2px;
    }
    .pagination-pager-number a {
        display: inline-block;
        width: 20px;
        height: 20px;
        line-height: 20px;
        font-size: 13px;
        text-align: center;
        vertical-align: middle;
        border-radius: 50%;
        color: #ffffff;
        background: #4d4d4d;
    }
    .pagination-pager-number a:hover, .pagination-pager-number-active a {
        color: #4d4d4d;
        background: #ffffff;
    }
</style>
