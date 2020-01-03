<template>
    <ul class="pagination">
        <li class="pagination-prev" v-show="internalCurrentPage != 1"><a @click="prev">« Prev</a></li>
        <li class="pagination-pager">
            <Pager
                :currentPage="internalCurrentPage"
                :pageCount="internalPageCount"
                :pagerCount="pagerCount"
                @pager-change="pagerChange" />
        </li>
        <li class="pagination-next" v-show="internalCurrentPage != internalPageCount"><a @click="next">Next »</a></li>
    </ul>
</template>

<script>
    import Pager from './Pager.vue'
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
        components: {
            Pager
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
            },
            prev () {
                const newVal = this.internalCurrentPage -= 1
                this.$emit('prev-click', this.getValidCurrentPage(newVal))
                this.emitChange()
            },
            next () {
                const newVal = this.internalCurrentPage += 1
                this.$emit('next-click', this.getValidCurrentPage(newVal))
                this.emitChange()
            },
            pagerChange (value) {
                this.internalCurrentPage = this.getValidCurrentPage(value)
                this.emitChange()
            },
            emitChange () {
                this.$nextTick(() => {
                    this.$emit('current-change', this.internalCurrentPage)
                })
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
