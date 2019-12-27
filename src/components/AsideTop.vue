<!-- 左侧边栏组件-上部分 -->

<template>
    <div class="aside-top">
        <div class="avatar">
            <img v-bind:src="src_avatar" class="avatar-img" />    
        </div> 
    </div>
</template>

<script>
    import src_avatar from '../assets/icon/head.png'

    export default {
        name: 'AsideTop',
        data() {
            return {
                src_avatar: src_avatar
            }
        }
    }
</script>
