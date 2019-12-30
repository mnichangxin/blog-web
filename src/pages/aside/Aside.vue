<template>
    <div class="aside nav">
        <div class="aside-top">
            <div class="avatar">
                <img v-bind:src="src_avatar" class="avatar-img" />
            </div>
        </div>
        <div class="aside-bottom">
            <ul class="aside-text">
                <p class="nickname">浮生若梦</p>
                <p class="feature">浮生若梦，稍纵即逝......</p>
            </ul>
            <ul class="aside-category">
                <li class="aside-category-item" v-for="(item, index) in category" v-bind:key="index">{{ item }}</li>
            </ul>
            <ul class="aside-link">
                <li class="aside-link-item" v-for="(item, index) in links" v-bind:key="index">
                    <a class="aside-link-item-src" v-bind:href="item.href" target="_blank">
                        <img class="aside-link-item-img" v-bind:src="item.src" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import src_avatar from '@assets/icon/head.png'
    import src_github from '@assets/icon/github.png'
    import src_weibo from '@assets/icon/weibo.png'
    import src_zhihu from '@assets/icon/zhihu.png'
    import src_twitter from '@assets/icon/twitter.png'
    import src_mail from '@assets/icon/mail.png'

    export default {
        name: 'Aside',
        data () {
            return {
                src_avatar: src_avatar,
                category: [
                    '主页',
                    '前端',
                    '后端',
                    'Android',
                    'IOS',
                    '算法'
                ],
                links: [
                    {
                        src: src_github,
                        href: 'https://github.com/mnichangxin'
                    },
                    {
                        src: src_weibo,
                        href: 'http://weibo.com/123happylife'
                    },
                    {
                        src: src_zhihu,
                        href: 'https://www.zhihu.com/people/mnichangxin'
                    },
                    {
                        src: src_twitter,
                        href: 'https://twitter.com/mnichangxin'
                    },
                    {
                        src: src_mail,
                        href: 'mailto:mnichangxin@163.com'
                    }
                ]
            }
        }
    }
</script>
