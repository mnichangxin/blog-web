<template>
    <ul class="pagination">
        <li class="pagination-prev"><a>« Prev</a></li>
        <li class="pagination-pager">
            <ul>
                <li class="pagination-pager-number pagination-pager-number-active"><a>1</a></li>
                <li class="pagination-pager-number"><a>2</a></li>
                <li class="pagination-pager-number"><a>3</a></li>
                <li class="pagination-pager-number"><a>4</a></li>
                <li class="pagination-pager-number"><a>5</a></li>
                <li class="pagination-pager-number"><a>6</a></li>
                <!-- <li class="pagination-pager-number"><a>7</a></li> -->
                <li class="pagination-pager-number"><a>»</a></li>
                <li class="pagination-pager-number"><a>8</a></li>
            </ul>
        </li>
        <li class="pagination-next"><a>Next »</a></li>
    </ul>
</template>
<script>
    export default {
        name: 'Pagination',
        props: {
            total: {
                type: Number,
                default: 0
            },
            currentPage: {
                type: Number,
                default: 1
            },
            pageSize: {
                type: Number,
                default: 10
            },
            pageCount: {
                type: Number,
                default: 0
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
                internalPageSize: 0
            }
        },
        computed: {
            pagers () {
                const pagerCount = this.pagerCount
                const halfPagerCount = (pagerCount - 1) / 2

                const currentPage = Number(this.currentPage)
                const pageCount = Number(this.pageCount)

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

                const array = []

                if (showPrevMore && !showNextMore) {
                    const startPage = pageCount - (pagerCount - 2)
                    for (let i = startPage; i < pageCount; i++) {
                        array.push(i)
                    }
                } else if (!showPrevMore && showNextMore) {
                    for (let i = 2; i < pagerCount; i++) {
                        array.push(i)
                    }
                } else if (showPrevMore && showNextMore) {
                    const offset = Math.floor(pagerCount / 2) - 1
                    for (let i = currentPage - offset; i <= currentPage + offset; i++) {
                        array.push(i)
                    }
                } else {
                    for (let i = 2; i < pageCount; i++) {
                        array.push(i)
                    }
                }

                // this.showPrevMore = showPrevMore
                // this.showNextMore = showNextMore

                return array
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
