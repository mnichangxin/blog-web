<template>
    <Body>
        <div class="category">
            <p class="category-header">
                <span class="category-header-title">分类 / 标签</span>
            </p>
            <div class="category-body">
                <div class="category-body-category"></div>
                <p>已有X个分类，共计X个标签</p>
                <div class="category-body-tags"></div>
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

        }
    }
</script>
