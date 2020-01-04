<template>
    <div class="aside">
        <div class="aside-top">
            <div class="aside-avatar">
                <img v-bind:src="src_avatar" class="aside-avatar-img" />
            </div>
        </div>
        <div class="aside-bottom">
            <ul class="aside-text">
                <li class="aside-text-nickname">Shawn</li>
                <li class="aside-text-feature">一个无聊的人的小站</li>
            </ul>
            <ul class="aside-menu">
                <li><a title="首页"><i class="fa fa-home"></i></a></li>
                <li><a><i class="fa fa-archive"></i></a></li>
                <li><a><i class="fa fa-tags"></i></a></li>
                <li><a><i class="fa fa-photo"></i></a></li>
                <li><a><i class="fa fa-home"></i></a></li>
                <li><a><i class="fa fa-home"></i></a></li>
                <li><a><i class="fa fa-tags"></i></a></li>
                <li><a><i class="fa fa-photo"></i></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import src_avatar from '@assets/image/head.png'

    export default {
        name: 'Aside',
        data () {
            return {
                src_avatar: src_avatar
            }
        }
    }
</script>
