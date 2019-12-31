<template>
    <ul class="tag-cloud">
        <li class="tag-cloud-item" v-for="tag in random_tags" :key="tag.index">
            <span class="tag-cloud-des" :class="`tag-cloud-des-${tag.index}`">{{ tag.des }}</span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'TagCloud',
        props: ['tags'],
        computed: {
            random_tags () {
                const result = []
                const indexs = [0, 1, 2, 3, 4]
                let count = indexs.length
                for (let i = 0; i < this.tags.length; i++) {
                    const index = ~~(Math.random() * count) + i
                    result[i] = {
                        index: indexs[index],
                        des: this.tags[i]
                    }
                    indexs[index] = indexs[i]
                    count--
                }
                return result
            }
        }
    }
</script>
